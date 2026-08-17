type PublicStatusBadgeProps = {
  status: string;
  type: "litter" | "puppy";
};

const litterStatusClasses: Record<string, string> = {
  Planned: "border-neutral-700 bg-neutral-900 text-neutral-200",
  Expected: "border-sky-500/30 bg-sky-500/12 text-sky-200",
  Born: "border-amber-500/30 bg-amber-500/12 text-amber-200",
  "Accepting Applications":
    "border-emerald-500/30 bg-emerald-500/12 text-emerald-200",
  Available: "border-emerald-500/30 bg-emerald-500/12 text-emerald-200",
  "Fully Reserved": "border-neutral-700 bg-neutral-900 text-neutral-300",
  Placed: "border-neutral-700 bg-neutral-900 text-neutral-300",
  Archived: "border-neutral-800 bg-neutral-950 text-neutral-500",
};

const puppyStatusClasses: Record<string, string> = {
  Available: "border-emerald-500/30 bg-emerald-500/12 text-emerald-200",
  Reserved: "border-amber-500/30 bg-amber-500/12 text-amber-200",
  Retained: "border-sky-500/30 bg-sky-500/12 text-sky-200",
  Placed: "border-neutral-700 bg-neutral-900 text-neutral-300",
  "Not Yet Available": "border-neutral-700 bg-neutral-900 text-neutral-300",
};

export default function PublicStatusBadge({
  status,
  type,
}: PublicStatusBadgeProps) {
  const classes =
    (type === "litter" ? litterStatusClasses : puppyStatusClasses)[status] ??
    "border-neutral-700 bg-neutral-900 text-neutral-300";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${classes}`}
    >
      {status}
    </span>
  );
}
