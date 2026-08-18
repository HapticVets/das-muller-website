export default function VeteranSection({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-t border-neutral-900 ${className}`.trim()}>
      <div className="section-shell-tight">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title max-w-4xl">{title}</h2>
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}
