// Independent mmt510.com Vercel Function. No Console dependencies.
import http2 from 'node:http2';
import { createPrivateKey, sign } from 'node:crypto';

const allowedOrigins = new Set([
  'https://mmt510.com',
  'https://www.mmt510.com',
]);
const botPattern = /bot|crawler|spider|slurp|headless|lighthouse|uptime|monitor|scanner|safelinks|proofpoint|mimecast|security|preview/i;

function base64url(v) { return Buffer.from(v).toString('base64url'); }
function apnsJwt() {
  const team = process.env.APNS_TEAM_ID;
  const keyId = process.env.APNS_KEY_ID;
  const raw = process.env.APNS_PRIVATE_KEY || process.env.APNS_AUTH_KEY;
  if (!team || !keyId || !raw) throw new Error('APNs signing configuration incomplete');
  const keyText = raw.replace(/\\n/g, '\n');
  const key = createPrivateKey(keyText);
  const header = base64url(JSON.stringify({ alg: 'ES256', kid: keyId }));
  const payload = base64url(JSON.stringify({ iss: team, iat: Math.floor(Date.now() / 1000) }));
  const message = `${header}.${payload}`;
  const signature = sign('sha256', Buffer.from(message), { key, dsaEncoding: 'ieee-p1363' });
  return `${message}.${base64url(signature)}`;
}

function sendApns(title, body, data) {
  const token = process.env.APNS_DEVICE_TOKEN;
  const bundle = process.env.APNS_BUNDLE_ID;
  if (!token || !bundle) return Promise.reject(new Error('APNs device/bundle configuration incomplete'));
  const env = (process.env.APNS_ENV || 'production').toLowerCase();
  const host = env === 'sandbox' || env === 'development'
    ? 'https://api.sandbox.push.apple.com' : 'https://api.push.apple.com';
  return new Promise((resolve, reject) => {
    const client = http2.connect(host);
    let settled = false;
    const finish = (err) => {
      if (settled) return;
      settled = true;
      client.close();
      if (err) reject(err); else resolve();
    };
    client.on('error', finish);
    const request = client.request({
      ':method': 'POST',
      ':path': `/3/device/${token}`,
      authorization: `bearer ${apnsJwt()}`,
      'apns-topic': bundle,
      'apns-push-type': 'alert',
      'apns-priority': '10',
      'content-type': 'application/json',
    });
    let status = 0;
    let response = '';
    request.on('response', (headers) => { status = Number(headers[':status']); });
    request.on('data', (chunk) => { response += chunk.toString().slice(0, 300); });
    request.on('end', () => finish(status === 200 ? null : new Error(`APNs HTTP ${status}: ${response}`)));
    request.on('error', finish);
    request.setTimeout(8000, () => finish(new Error('APNs timeout')));
    request.end(JSON.stringify({
      aps: { alert: { title, body }, sound: 'default' },
      type: 'portfolio_visit',
      ...data,
    }));
  });
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const origin = String(req.headers.origin || '');
  if (!allowedOrigins.has(origin)) return res.status(403).json({ ok: false });
  const ua = String(req.headers['user-agent'] || '');
  if (botPattern.test(ua)) return res.status(204).end();

  let input;
  try { input = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; }
  catch { return res.status(400).json({ ok: false }); }
  if (!input || typeof input !== 'object') return res.status(400).json({ ok: false });
  const path = String(input.path || '/').slice(0, 180);
  if (!path.startsWith('/') || path.startsWith('//') || /[\r\n]/.test(path)) return res.status(400).json({ ok: false });
  const referringPage = String(input.referrer || '').slice(0, 300);
  const eventTime = new Date().toISOString();
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('portfolio-visit: missing Supabase configuration');
    return res.status(503).json({ ok: false });
  }
  // 'portfolio:site' is deliberately not a job application ID. Confirm DB constraints before activating.
  const event = {
    application_id: 'portfolio:site',
    event_type: 'portfolio_visit',
    event_time: eventTime,
    source: 'portfolio',
    company_detected: null,
    role_detected: null,
    metadata: { artifact: 'public_portfolio', path, referrer: referringPage, link_class: 'site' },
  };
  try {
    const result = await fetch(`${url.replace(/\/$/, '')}/rest/v1/application_events`, {
      method: 'POST',
      headers: {
        apikey: key,
        authorization: `Bearer ${key}`,
        'content-type': 'application/json',
        prefer: 'return=minimal',
      },
      body: JSON.stringify(event),
    });
    if (!result.ok) {
      console.error('portfolio-visit: Supabase insert failed', result.status, (await result.text()).slice(0, 400));
      return res.status(503).json({ ok: false });
    }
  } catch (err) {
    console.error('portfolio-visit: Supabase request failed', err?.message);
    return res.status(503).json({ ok: false });
  }
  try {
    await sendApns('👤 Portfolio visit', `${path} · ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}`, { path, eventTime });
    console.info('portfolio-visit: APNs accepted', { path, eventTime });
  } catch (err) {
    console.error('portfolio-visit: APNs push failed', err?.message);
    // Event is safely recorded even if the push is temporarily unavailable.
  }
  return res.status(204).end();
}
