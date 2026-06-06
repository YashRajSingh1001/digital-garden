const STRAVA_TOKEN_URL = "https://www.strava.com/oauth/token";
const STRAVA_API_BASE = "https://www.strava.com/api/v3";

async function getAccessToken(): Promise<string | null> {
  const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN } = process.env;
  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) return null;

  const res = await fetch(STRAVA_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      refresh_token: STRAVA_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.access_token ?? null;
}

export interface StravaStats {
  ytdRuns: number;
  ytdDistance: number; // meters
  recentRuns: number;
  recentDistance: number;
  allTimeRuns: number;
  allTimeDistance: number;
}

export interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  start_date_local: string;
  type: string;
}

export async function getStravaStats(): Promise<StravaStats | null> {
  const token = await getAccessToken();
  if (!token) return null;

  const res = await fetch(`${STRAVA_API_BASE}/athletes/112189344/stats`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 21600 },
  });

  if (!res.ok) return null;
  const data = await res.json();

  return {
    ytdRuns: data.ytd_run_totals?.count ?? 0,
    ytdDistance: data.ytd_run_totals?.distance ?? 0,
    recentRuns: data.recent_run_totals?.count ?? 0,
    recentDistance: data.recent_run_totals?.distance ?? 0,
    allTimeRuns: data.all_run_totals?.count ?? 0,
    allTimeDistance: data.all_run_totals?.distance ?? 0,
  };
}

export async function getLastActivity(): Promise<StravaActivity | null> {
  const token = await getAccessToken();
  if (!token) return null;

  const res = await fetch(`${STRAVA_API_BASE}/athlete/activities?per_page=1`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 21600 },
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data[0] ?? null;
}

export function formatPace(distanceM: number, movingTimeSec: number): string {
  const km = distanceM / 1000;
  const minPerKm = movingTimeSec / 60 / km;
  const mins = Math.floor(minPerKm);
  const secs = Math.round((minPerKm - mins) * 60);
  return `${mins}:${secs.toString().padStart(2, "0")}/km`;
}

export function formatDistance(meters: number): string {
  return (meters / 1000).toFixed(1) + " km";
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}
