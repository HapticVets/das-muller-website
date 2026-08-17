import Image from "next/image";

type PublicMediaFrameProps = {
  src?: string;
  alt: string;
  type?: "image" | "video";
  aspectRatio?: string;
  objectFit?: "cover" | "contain";
  className?: string;
  mediaClassName?: string;
  poster?: string;
};

export default function PublicMediaFrame({
  src,
  alt,
  type = "image",
  aspectRatio = "16 / 10",
  objectFit = "cover",
  className = "",
  mediaClassName = "",
  poster,
}: PublicMediaFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-neutral-800 bg-neutral-950 ${className}`.trim()}
      style={{ aspectRatio }}
    >
      {!src ? (
        <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_38%),linear-gradient(180deg,rgba(23,23,23,0.98)_0%,rgba(10,10,10,1)_100%)] p-6 text-center">
          <p className="max-w-xs text-sm leading-7 text-neutral-400">
            Public media will appear here when approved for this litter.
          </p>
        </div>
      ) : type === "video" ? (
        <video
          controls
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className={`h-full w-full ${mediaClassName}`.trim()}
          style={{ objectFit }}
        >
          <source src={src} />
        </video>
      ) : src.startsWith("/") ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw"
          className={mediaClassName}
          style={{ objectFit }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full ${mediaClassName}`.trim()}
          style={{ objectFit }}
        />
      )}
    </div>
  );
}
