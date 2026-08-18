import Header from "@/components/Header";

type VeteranPlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function VeteranPlaceholderPage({
  eyebrow,
  title,
  description,
}: VeteranPlaceholderPageProps) {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="border-b border-neutral-900 bg-[linear-gradient(180deg,rgba(23,23,23,0.96)_0%,rgba(10,10,10,1)_100%)]">
          <div className="section-shell max-w-4xl">
            <p className="section-eyebrow">{eyebrow}</p>
            <h1 className="section-title max-w-[14ch]">{title}</h1>
            <p className="section-copy mt-6 max-w-3xl">{description}</p>
          </div>
        </section>
      </main>
    </>
  );
}
