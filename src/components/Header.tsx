import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <a href="#" className="flex items-center gap-3">
          <div className="rounded-xl bg-neutral-800 p-2">
            <Image
              src="/logos/das-muller-icon.png"
              alt="Das Müller"
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-base font-semibold uppercase tracking-[0.2em] text-white">
              Das Müller
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              German Shepherds
            </div>
          </div>
        </a>

        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#" className="text-neutral-300 hover:text-white">
            Home
          </a>
          <a href="#programs" className="text-neutral-300 hover:text-white">
            Programs
          </a>
          <a href="#mission" className="text-neutral-300 hover:text-white">
            Mission
          </a>
          <a href="#contact" className="text-neutral-300 hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
        >
          Apply
        </a>

      </div>
    </header>
  );
}