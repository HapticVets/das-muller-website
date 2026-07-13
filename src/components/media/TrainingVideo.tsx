type TrainingVideoProps = {
  src: string;
  title: string;
  description?: string;
  poster?: string;
  aspectRatio?: number | string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
  containerClassName?: string;
  headingLevel?: "h2" | "h3" | "h4";
};

function getVideoType(src: string) {
  const normalized = src.toLowerCase();

  if (normalized.endsWith(".mov")) {
    return "video/quicktime";
  }

  return "video/mp4";
}

export default function TrainingVideo({
  src,
  title,
  description,
  poster,
  aspectRatio = "16 / 9",
  controls = true,
  autoPlay = false,
  loop = false,
  className = "",
  containerClassName = "",
  headingLevel = "h3",
}: TrainingVideoProps) {
  const HeadingTag = headingLevel;
  const shouldMute = true;
  const shouldLoop = autoPlay || loop;

  return (
    <div
      className={`rounded-[1.5rem] border border-neutral-800 bg-neutral-950 ${containerClassName}`.trim()}
    >
      <div
        className="relative overflow-hidden rounded-[1.5rem]"
        style={{ aspectRatio }}
      >
        <video
          autoPlay={autoPlay}
          className={`h-full w-full bg-black ${className}`.trim()}
          controls={controls}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          loop={shouldLoop}
          muted={shouldMute}
          playsInline
          poster={poster}
          preload="metadata"
        >
          <source src={src} type={getVideoType(src)} />
        </video>
      </div>

      <div className="p-5">
        <HeadingTag className="text-xl font-semibold text-white">
          {title}
        </HeadingTag>
        {description ? (
          <p className="mt-3 text-sm leading-7 text-neutral-300">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
