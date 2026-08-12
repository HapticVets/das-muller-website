import type { HealthStatus } from "@/lib/dogs";

const statusClasses: Record<HealthStatus, string> = {
  Completed: "border-emerald-500/30 bg-emerald-500/12 text-emerald-200",
  Pending: "border-amber-500/30 bg-amber-500/12 text-amber-200",
  Planned: "border-sky-500/30 bg-sky-500/12 text-sky-200",
  "Not Planned": "border-neutral-700 bg-neutral-900 text-neutral-300",
};

export default function HealthStatusBadge({
  status,
}: {
  status: HealthStatus;
}) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${statusClasses[status]}`}
    >
      {status}
    </span>
  );
}
