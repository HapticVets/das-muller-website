import Link from "next/link";
import {
  AI_TRAINER_PRICE_LINE,
  AI_TRAINER_SUPPORTING_LINE,
  ONLINE_TRAINING_APP_URL,
} from "@/lib/siteUrls";

type AiTrainerPathProps = {
  eyebrow: string;
  title: string;
  body: string;
  internalLabel?: string;
  internalHref?: string;
  externalLabel?: string;
  externalHref?: string;
  compact?: boolean;
};

export default function AiTrainerPath({
  eyebrow,
  title,
  body,
  internalLabel = "Explore the AI Trainer",
  internalHref = "/ai-dog-trainer",
  externalLabel = "Start Training Online",
  externalHref = ONLINE_TRAINING_APP_URL,
  compact = false,
}: AiTrainerPathProps) {
  return (
    <section
      className={`rounded-[1.75rem] border border-amber-500/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.14),rgba(10,10,10,0.98)_42%,rgba(10,10,10,0.98)_100%)] ${
        compact ? "p-6 md:p-7" : "p-7 md:p-9"
      }`}
    >
      <p className="section-eyebrow text-amber-300">{eyebrow}</p>
      <h2 className={`${compact ? "mt-4 text-2xl md:text-3xl" : "section-title max-w-[15ch]"}`}>
        {title}
      </h2>
      <p className={`${compact ? "mt-4 max-w-3xl text-base leading-8 text-neutral-300" : "section-copy"}`}>
        {body}
      </p>
      <p className={`${compact ? "mt-4 text-sm leading-7 text-amber-100/90" : "mt-5 text-base leading-8 text-amber-100/90"}`}>
        {AI_TRAINER_PRICE_LINE}
      </p>
      <div className="mt-7 flex flex-wrap gap-4">
        <Link href={internalHref} className="action-primary">
          {internalLabel}
        </Link>
        <a
          href={externalHref}
          className="action-secondary"
          rel="noreferrer"
          target="_blank"
        >
          {externalLabel}
        </a>
      </div>
      <p className="mt-5 text-sm leading-7 text-neutral-400">
        {AI_TRAINER_SUPPORTING_LINE}
      </p>
    </section>
  );
}
