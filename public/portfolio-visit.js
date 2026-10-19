// One successful visit report per tab in 30 minutes. Failed requests may retry.
(() => {
  if (location.hostname !== 'mmt510.com' && location.hostname !== 'www.mmt510.com') return;
  if (navigator.webdriver || document.visibilityState === 'prerender') return;
  const stampKey = 'mmt510_portfolio_visit_last';
  try {
    const last = Number(sessionStorage.getItem(stampKey) || 0);
    if (Date.now() - last < 30 * 60 * 1000) return;
  } catch { /* Storage may be blocked: still report this navigation. */ }

  fetch('/api/portfolio-visit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: location.pathname, referrer: document.referrer }),
    keepalive: true,
    credentials: 'omit',
  }).then((response) => {
    // 204 = accepted by endpoint; database insert succeeded (APNs is logged separately).
    if (response.ok) {
      try { sessionStorage.setItem(stampKey, String(Date.now())); } catch {}
    }
  }).catch(() => { /* Failure will be retried on next navigation / refresh. */ });
})();
