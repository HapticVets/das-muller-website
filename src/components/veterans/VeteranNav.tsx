"use client";

import { usePathname } from "next/navigation";
import VeteranLink from "@/components/veterans/VeteranLink";
import { useVeteranRouteMode } from "@/components/veterans/VeteranRouteProvider";
import {
  getComparableVeteranPath,
  getVeteranHref,
} from "@/lib/veteranRouting";
import { MAIN_SITE_URL } from "@/lib/siteDomains";

const veteranNavLinks = [
  { href: "/veterans", label: "Home" },
  { href: "/veterans/about", label: "About" },
  { href: "/veterans/programs", label: "Programs" },
  { href: "/veterans/partners", label: "Partners" },
  { href: "/veterans/contact", label: "Contact" },
];

export default function VeteranNav() {
  const pathname = usePathname();
  const useSubdomainPaths = useVeteranRouteMode();
  const comparablePath = getComparableVeteranPath(pathname, useSubdomainPaths);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/90 bg-neutral-950/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-amber-400">
              Patriot K9 Command
            </p>
            <VeteranLink
              href="/veterans"
              className="mt-2 inline-block text-xl font-semibold tracking-[0.03em] text-white transition hover:text-amber-300 sm:text-2xl"
            >
              Veteran Outreach
            </VeteranLink>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-400">
              Transition support shaped around practical skills, canine
              development, homestead systems, and long-term structure.
            </p>
          </div>

          <a
            href={MAIN_SITE_URL}
            className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-neutral-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Patriot K9 Command
          </a>
        </div>

        <nav
          aria-label="Veteran Outreach"
          className="mt-5 flex flex-wrap gap-2 text-sm text-neutral-300"
        >
          {veteranNavLinks.map((item) => {
            const resolvedHref = getVeteranHref(item.href, useSubdomainPaths);
            const isActive =
              comparablePath === resolvedHref ||
              (resolvedHref !== "/" &&
                comparablePath.startsWith(`${resolvedHref}/`));

            return (
              <VeteranLink
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-4 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${
                  isActive
                    ? "bg-amber-500 text-black"
                    : "border border-neutral-800 bg-neutral-900/40 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900"
                }`}
              >
                {item.label}
              </VeteranLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
