import {
  type StravaActivity,
  type StravaStats,
  formatDistance,
  formatDuration,
  formatPace,
} from "@/lib/strava";

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-[#7a6a58] uppercase tracking-widest">{label}</span>
      <span className="text-sm font-medium text-[#18120a]">{value}</span>
    </div>
  );
}

interface Props {
  stats: StravaStats | null;
  lastActivity: StravaActivity | null;
}

export default function StravaWidget({ stats, lastActivity }: Props) {
  if (!stats && !lastActivity) {
    return (
      <div className="rounded-xl border border-[#e0d8cc] bg-[#f5f0e8] px-5 py-4 text-sm text-[#7a6a58]">
        Strava not connected — add env vars to enable.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#e0d8cc] bg-[#f5f0e8] px-5 py-4 space-y-4">
      {lastActivity && (
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs text-[#7a6a58] uppercase tracking-widest mb-1">Last run</p>
            <p className="text-sm text-[#18120a] font-medium truncate">{lastActivity.name}</p>
            <p className="text-xs text-[#7a6a58] mt-0.5">
              {new Date(lastActivity.start_date_local).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex gap-4 shrink-0 text-right">
            <StatBox label="dist" value={formatDistance(lastActivity.distance)} />
            <StatBox label="time" value={formatDuration(lastActivity.moving_time)} />
            <StatBox
              label="pace"
              value={formatPace(lastActivity.distance, lastActivity.moving_time)}
            />
          </div>
        </div>
      )}

      {stats && (
        <>
          <div className="border-t border-[#e0d8cc]" />
          <div className="flex gap-6">
            <StatBox label="runs this year" value={stats.ytdRuns.toString()} />
            <StatBox label="km this year" value={formatDistance(stats.ytdDistance)} />
            <StatBox label="all-time runs" value={stats.allTimeRuns.toString()} />
            <StatBox label="all-time km" value={formatDistance(stats.allTimeDistance)} />
          </div>
        </>
      )}
    </div>
  );
}
