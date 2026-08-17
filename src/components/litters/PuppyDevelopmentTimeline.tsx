import type { PublicDevelopmentEntry } from "@/lib/publicLitters";
import PublicMediaFrame from "@/components/litters/PublicMediaFrame";

export default function PuppyDevelopmentTimeline({
  entries,
  media = [],
}: {
  entries: PublicDevelopmentEntry[];
  media?: Array<{
    url: string;
    altText: string;
    type: "image" | "video";
  }>;
}) {
  if (entries.length === 0 && media.length === 0) {
    return (
      <p className="mt-4 text-sm leading-7 text-neutral-400">
        Development updates will appear here when public weekly summaries are
        available.
      </p>
    );
  }

  return (
    <div className="mt-5 space-y-5">
      {media.length > 0 ? (
        <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-950/80 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
            Public Media
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {media.map((item, index) => (
              <PublicMediaFrame
                key={`${item.url}-${index}`}
                src={item.url}
                alt={item.altText}
                type={item.type}
                aspectRatio={item.type === "video" ? "16 / 10" : "4 / 3"}
                objectFit="cover"
              />
            ))}
          </div>
        </div>
      ) : null}

      {entries.map((entry) => (
        <div
          key={`${entry.weekLabel}-${entry.title}`}
          className="rounded-[1.5rem] border border-neutral-800 bg-neutral-950/80 p-5"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
            {entry.weekLabel}
          </p>
          <h4 className="mt-3 text-lg font-semibold text-white">{entry.title}</h4>
          <p className="mt-3 text-sm leading-7 text-neutral-300">{entry.summary}</p>

          {entry.media.length > 0 ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {entry.media.map((media, index) => (
                <PublicMediaFrame
                  key={`${entry.weekLabel}-${media.url}-${index}`}
                  src={media.url}
                  alt={media.altText}
                  type={media.type}
                  aspectRatio={media.type === "video" ? "16 / 10" : "4 / 3"}
                  objectFit="cover"
                />
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
