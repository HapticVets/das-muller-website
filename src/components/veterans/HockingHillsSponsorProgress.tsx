import { hockingHillsSponsorProgress as progress } from "@/lib/hockingHillsSponsor";

const money = (value: number | null) => value === null ? "To be confirmed" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export default function HockingHillsSponsorProgress() {
  const remaining = progress.totalGoal !== null && progress.raisedCommitted !== null ? Math.max(0, progress.totalGoal - progress.raisedCommitted) : null;
  const percent = progress.totalGoal !== null && progress.totalGoal > 0 && progress.raisedCommitted !== null ? Math.min(100, Math.max(0, progress.raisedCommitted / progress.totalGoal * 100)) : null;
  return (
<section aria-labelledby="sponsor-progress" className="surface-card mt-10 border-amber-500/30 p-5 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div><p className="section-eyebrow">Building the mission together</p><h2 id="sponsor-progress" className="mt-2 text-2xl font-semibold sm:text-3xl">Sponsor progress</h2></div>
            <span className="rounded-full border border-neutral-700 px-3 py-2 text-xs text-neutral-300">{progress.updatedAt ? `Updated ${progress.updatedAt}` : "Funding update pending"}</span>
          </div>
          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            {[["Total goal", money(progress.totalGoal)], ["Raised / committed", money(progress.raisedCommitted)], ["Remaining", money(remaining)], ["Laptops needed", progress.laptopsNeeded ?? "Target pending"], ["Fishing kits needed", progress.fishingKitsNeeded ?? "Target pending"], ["Confirmed sponsors", progress.confirmedSponsors === null ? "List pending" : progress.confirmedSponsors.length]].map(([label, value]) => <div key={label} className="rounded-xl bg-neutral-950/70 p-4"><dt className="text-sm text-neutral-400">{label}</dt><dd className="mt-2 text-xl font-semibold text-amber-300 sm:text-2xl">{value}</dd></div>)}
          </dl>
          {percent !== null && <div className="mt-6"><div role="progressbar" aria-label="Sponsorship funding progress" aria-valuenow={Math.round(percent)} aria-valuemin={0} aria-valuemax={100} className="h-3 overflow-hidden rounded-full bg-neutral-800"><div className="h-full bg-amber-400" style={{ width: `${percent}%` }} /></div><p className="mt-2 text-sm text-neutral-300">{Math.round(percent)}% of goal raised or committed</p></div>}
          <p className="mt-5 text-sm leading-7 text-neutral-400">The existing $20,000 working planning ceiling is preliminary; the final fundraising goal and reconciled totals have not been published. Pending values are not zero. Commitments are distinguished from received funds in project records; donated goods are tracked separately.</p>
          {progress.confirmedSponsors !== null && progress.confirmedSponsors.length > 0 && <p className="mt-4 text-sm leading-7 text-neutral-200">With thanks to: {progress.confirmedSponsors.join(" · ")}</p>}
        </section>
  );
}
