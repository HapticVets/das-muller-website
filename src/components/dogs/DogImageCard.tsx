import Image from "next/image";
import type { DogPhoto } from "@/lib/dogs";

export default function DogImageCard({
  photo,
  aspectClassName = "aspect-[4/5]",
  priority = false,
}: {
  photo?: DogPhoto;
  aspectClassName?: string;
  priority?: boolean;
}) {
  if (!photo) {
    return (
      <div
        className={`relative overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-950 ${aspectClassName}`}
      >
        <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_38%),linear-gradient(180deg,rgba(23,23,23,0.98)_0%,rgba(10,10,10,1)_100%)] p-8 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Authentic Photo
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Profile image coming soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-950 ${aspectClassName}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        className="object-cover"
        style={{ objectPosition: photo.objectPosition ?? "center" }}
      />
    </div>
  );
}
