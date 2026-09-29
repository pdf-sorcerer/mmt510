#!/usr/bin/env python3

import json
import os
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

CLIENT_ID = os.environ["STRAVA_CLIENT_ID"]
CLIENT_SECRET = os.environ["STRAVA_CLIENT_SECRET"]
ACCESS_TOKEN = os.environ["STRAVA_ACCESS_TOKEN"]
REFRESH_TOKEN = os.environ["STRAVA_REFRESH_TOKEN"]

OUT = Path("src/data/strava.json")
REFRESH_OUT = Path(".strava_refresh_token")


def request_json(url, *, method="GET", headers=None, data=None):
    req = urllib.request.Request(
        url,
        method=method,
        headers=headers or {},
        data=data,
    )
    with urllib.request.urlopen(req, timeout=30) as response:
        return json.load(response)


def api_get(path, token):
    return request_json(
        f"https://www.strava.com/api/v3{path}",
        headers={"Authorization": f"Bearer {token}"},
    )


def refresh_access_token():
    body = urllib.parse.urlencode(
        {
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
            "grant_type": "refresh_token",
            "refresh_token": REFRESH_TOKEN,
        }
    ).encode()

    token_data = request_json(
        "https://www.strava.com/oauth/token",
        method="POST",
        headers={"Content-Type": "application/x-www-form-urlencoded"},
        data=body,
    )

    REFRESH_OUT.write_text(token_data["refresh_token"])
    return token_data["access_token"]


def get_token():
    # First try the existing short-lived token. If it has expired,
    # refresh it and persist the rotated refresh token for GitHub.
    try:
        api_get("/athlete", ACCESS_TOKEN)
        return ACCESS_TOKEN
    except Exception:
        return refresh_access_token()


def activity_laps(activity_id, token):
    try:
        return api_get(f"/activities/{activity_id}/laps", token)
    except Exception:
        return []


def normalize_activity(activity, token):
    meters = float(activity.get("distance") or 0)
    moving = int(activity.get("moving_time") or 0)
    sport = activity.get("sport_type") or activity.get("type") or "Activity"

    miles = meters * 0.000621371
    yards = meters * 1.0936133

    result = {
        "id": activity["id"],
        "name": activity.get("name") or sport,
        "sport_type": sport,
        "date": activity.get("start_date_local"),
        "distance_meters": round(meters, 1),
        "distance_miles": round(miles, 2),
        "distance_yards": round(yards),
        "moving_time": moving,
        "elapsed_time": int(activity.get("elapsed_time") or 0),
        "elevation_gain_meters": activity.get("total_elevation_gain"),
        "average_heartrate": activity.get("average_heartrate"),
        "max_heartrate": activity.get("max_heartrate"),
        "url": f"https://www.strava.com/activities/{activity['id']}",
    }

    if sport == "Swim":
        if yards > 0 and moving > 0:
            result["pace_100yd_seconds"] = round(moving / (yards / 100))
        else:
            result["pace_100yd_seconds"] = None

        laps = activity_laps(activity["id"], token)
        result["laps"] = len(laps)
    else:
        result["pace_100yd_seconds"] = None
        result["laps"] = None

    return result


token = get_token()

athlete = api_get("/athlete", token)
activities = api_get("/athlete/activities?page=1&per_page=12", token)

normalized = [normalize_activity(a, token) for a in activities]

payload = {
    "generated_at": datetime.now(timezone.utc).isoformat(),
    "athlete": {
        "id": athlete.get("id"),
        "firstname": athlete.get("firstname"),
        "lastname": athlete.get("lastname"),
        "profile_url": f"https://www.strava.com/athletes/{athlete.get('id')}",
    },
    "activities": normalized,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(payload, indent=2) + "\n")

print(f"Wrote {len(normalized)} Strava activities to {OUT}")
