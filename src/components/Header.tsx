export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logos/das-muller-icon.png"
            alt="Das Müller"
            className="h-10 w-10 object-contain rounded-lg bg-neutral-900 p-1"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wider text-white">
              DAS MÜLLER
            </p>
            <p className="text-xs text-neutral-400">
              GERMAN SHEPHERDS
            </p>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
          <a href="/" className="hover:text-white">Home</a>
          <a href="#programs" className="hover:text-white">Programs</a>
          <a href="https://train.hapticvets.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Training
          </a>
          <a href="#application" className="hover:text-white">Apply</a>
        </nav>

        {/* CTA */}
        <a
          href="#application"
          className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
        >
          Apply
        </a>
      </div>
    </header>
  );
}