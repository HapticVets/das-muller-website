import Image from "next/image";

type ResponsiveMediaProps = {
  src: string;
  alt: string;
  sizes: string;
  aspectRatio?: number | string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  priority?: boolean;
  framed?: boolean;
  className?: string;
  mediaClassName?: string;
  containerClassName?: string;
  wrapperClassName?: string;
};

export default function ResponsiveMedia({
  src,
  alt,
  sizes,
  aspectRatio = "16 / 9",
  objectFit = "cover",
  objectPosition = "center",
  priority = false,
  framed = true,
  className = "",
  mediaClassName = "",
  containerClassName = "",
  wrapperClassName = "",
}: ResponsiveMediaProps) {
  const frameClasses = framed
    ? "rounded-[1.5rem] border border-neutral-800 bg-neutral-950"
    : "";

  return (
    <div
      className={`relative overflow-hidden ${frameClasses} ${containerClassName} ${wrapperClassName}`.trim()}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${className} ${mediaClassName}`.trim()}
        style={{ objectFit, objectPosition }}
      />
    </div>
  );
}
