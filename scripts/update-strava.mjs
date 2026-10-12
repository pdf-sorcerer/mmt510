import fs from 'node:fs/promises';

const {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_REFRESH_TOKEN,
} = process.env;

if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
  throw new Error(
    'Missing STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, or STRAVA_REFRESH_TOKEN'
  );
}

const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
    client_id: STRAVA_CLIENT_ID,
    client_secret: STRAVA_CLIENT_SECRET,
    refresh_token: STRAVA_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  }),
});

if (!tokenResponse.ok) {
  throw new Error(`Strava token refresh failed: ${await tokenResponse.text()}`);
}

const token = await tokenResponse.json();
const accessToken = token.access_token;

async function strava(path) {
  const response = await fetch(`https://www.strava.com/api/v3${path}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`${path}: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

const [athlete, summaries] = await Promise.all([
  strava('/athlete'),
  strava('/athlete/activities?per_page=100&page=1'),
]);

const activities = [];

for (const a of summaries) {
  let laps = null;

  // Detailed activity data gives us pool laps. Avoid extra API
  // requests for non-swimming activities.
  if (a.sport_type === 'Swim') {
    try {
      const detail = await strava(`/activities/${a.id}`);
      laps = Array.isArray(detail.laps) ? detail.laps.length : null;
    } catch (error) {
      console.warn(`Could not fetch swim detail ${a.id}:`, error.message);
    }
  }

  const distanceMeters = Number(a.distance || 0);
  const distanceMiles = distanceMeters / 1609.344;
  const distanceYards = distanceMeters * 1.0936132983;

  const pace100ydSeconds =
    a.sport_type === 'Swim' && distanceYards > 0
      ? Number(a.moving_time || 0) / (distanceYards / 100)
      : null;

  activities.push({
    id: a.id,
    name: a.name,
    sport_type: a.sport_type,
    date: a.start_date_local || a.start_date,
    distance_miles: distanceMiles,
    distance_yards: Math.round(distanceYards),
    moving_time: a.moving_time,
    pace100yd_seconds: pace100ydSeconds,
    average_heartrate: a.average_heartrate ?? null,
    max_heartrate: a.max_heartrate ?? null,
    laps,
    summary_polyline: a.map?.summary_polyline ?? null,
    url: `https://www.strava.com/activities/${a.id}`,
  });
}

const data = {
  activities,
  athlete: {
    id: athlete.id,
    firstname: athlete.firstname,
    lastname: athlete.lastname,
    profile: athlete.profile,
    profile_medium: athlete.profile_medium,
    profile_url: `https://www.strava.com/athletes/${athlete.id}`,
  },
};

await fs.writeFile(
  new URL('../src/data/strava.json', import.meta.url),
  JSON.stringify(data, null, 2) + '\n'
);

console.log(`Updated ${activities.length} Strava activities.`);
console.log(`Newest: ${activities[0]?.date ?? 'none'}`);
