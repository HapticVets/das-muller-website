"use client";

import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import VeteranLink from "@/components/veterans/VeteranLink";
import { useVeteranRouteMode } from "@/components/veterans/VeteranRouteProvider";
import {
  getComparableVeteranPath,
  getVeteranHref,
} from "@/lib/veteranRouting";

const veteranNavLinks = [
  { href: "/veterans", label: "Home" },
  { href: "/veterans/about", label: "About" },
  { href: "/veterans/programs", label: "Programs" },
  { href: "/veterans/adventures", label: "Adventures" },
  { href: "/veterans/adventures/hocking-hills", label: "Sponsor Hocking Hills" },
  { href: "/veterans/partners", label: "Get Involved" },
  { href: "/veterans/contact", label: "Contact" },
];

export default function VeteranNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();
  const pathname = usePathname();
  const useSubdomainPaths = useVeteranRouteMode();
  const comparablePath = getComparableVeteranPath(pathname, useSubdomainPaths);

  return (
    <header onKeyDown={(event) => { if (event.key === "Escape") { setMenuOpen(false); event.currentTarget.querySelector("button")?.focus(); } }} className="sticky top-0 z-50 border-b border-neutral-800/90 bg-neutral-950/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0 max-w-3xl">
            <VeteranLink href="/veterans" onClick={() => setMenuOpen(false)} className="inline-flex min-h-11 items-center text-sm font-semibold tracking-wide text-amber-400 sm:text-[0.7rem] sm:uppercase sm:tracking-[0.24em]">
              Haptic Veteran Outreach
            </VeteranLink>
            <p className="hidden text-2xl font-semibold tracking-[0.03em] text-white lg:block">
              Connection. Purpose. Community.
            </p>
            <p className="mt-2 hidden max-w-2xl text-sm leading-7 text-neutral-400 lg:block">
              An Ohio nonprofit developing practical resources, peer connection,
              shared adventures, and future learning opportunities.
            </p>
          </div>

          <button type="button" aria-expanded={menuOpen} aria-controls={navId} onClick={() => setMenuOpen(!menuOpen)} className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl border border-neutral-700 px-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 lg:hidden">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d={menuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}/></svg>
            {menuOpen ? "Close" : "Menu"}
          </button>

          <VeteranLink
            href="/veterans/donate"
            className="hidden min-h-11 items-center justify-center rounded-2xl lg:inline-flex border border-neutral-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Support the Mission
          </VeteranLink>
        </div>

        <nav
          id={navId}
          aria-label="Veteran Outreach"
          className={`${menuOpen ? "grid" : "hidden"} mt-3 max-h-[65dvh] gap-2 overflow-y-auto pb-1 text-sm text-neutral-300 sm:grid-cols-2 lg:mt-4 lg:flex lg:max-h-none lg:flex-wrap lg:overflow-visible`}
        >
          {veteranNavLinks.map((item) => {
            const resolvedHref = getVeteranHref(item.href, useSubdomainPaths);
            const isActive =
              comparablePath === resolvedHref ||
              (item.href !== "/veterans" && item.href !== "/veterans/adventures" && resolvedHref !== "/" &&
                comparablePath.startsWith(`${resolvedHref}/`));

            return (
              <VeteranLink
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`inline-flex min-h-11 shrink-0 items-center rounded-full px-4 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${
                  isActive
                    ? "bg-amber-500 text-black"
                    : "border border-neutral-800 bg-neutral-900/40 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900"
                }`}
              >
                {item.label}
              </VeteranLink>
            );
          })}
          <VeteranLink href="/veterans/donate" onClick={() => setMenuOpen(false)} className="inline-flex min-h-11 items-center rounded-xl bg-amber-500 px-4 font-semibold text-black lg:hidden">Support the Mission</VeteranLink>
        </nav>
      </div>
    </header>
  );
}
