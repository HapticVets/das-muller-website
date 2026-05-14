"use client";

import { useState } from "react";

const trainingLinks = [
  { href: "/training/evaluation", label: "Evaluation" },
  { href: "/training/puppy-foundation", label: "Puppy Foundation" },
  { href: "/training/private-lessons", label: "Private Lessons" },
  { href: "/training/day-training", label: "Day Training" },
  { href: "/training/board-and-train", label: "Board & Train" },
  { href: "/training/behavior-modification", label: "Behavior Modification" },
  {
    href: "/training/service-dog-foundations",
    label: "Service Dog Foundations",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileTrainingOpen, setIsMobileTrainingOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logos/das-muller-icon.png"
              alt="Das MÃ¼ller"
              className="h-10 w-10 rounded-lg bg-neutral-900 p-1 object-contain"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wider text-white">
                DAS MÃœLLER
              </p>
              <p className="text-xs text-neutral-400">GERMAN SHEPHERDS</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="#programs" className="hover:text-white">
              Programs
            </a>
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 text-neutral-300 transition hover:text-white focus:outline-none"
              >
                <span>Training Services</span>
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 transition group-hover:rotate-180 group-focus-within:rotate-180"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 translate-y-2 rounded-2xl border border-neutral-800 bg-neutral-950/95 p-2 opacity-0 shadow-2xl shadow-black/40 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {trainingLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm text-neutral-300 transition hover:bg-neutral-900 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <a href="#application" className="hover:text-white">
              Apply
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-xl border border-neutral-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-900 md:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              Menu
            </button>

            <a
              href="#application"
              className="hidden rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-black hover:opacity-90 md:inline-block"
            >
              Apply
            </a>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <nav
            id="mobile-nav"
            className="mt-4 rounded-3xl border border-neutral-800 bg-neutral-950 p-4 md:hidden"
          >
            <div className="space-y-2 text-sm text-neutral-300">
              <a
                href="/"
                className="block rounded-xl px-4 py-3 transition hover:bg-neutral-900 hover:text-white"
              >
                Home
              </a>
              <a
                href="#programs"
                className="block rounded-xl px-4 py-3 transition hover:bg-neutral-900 hover:text-white"
              >
                Programs
              </a>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-neutral-900 hover:text-white"
                  onClick={() => setIsMobileTrainingOpen((open) => !open)}
                  aria-expanded={isMobileTrainingOpen}
                >
                  <span>Training Services</span>
                  <svg
                    aria-hidden="true"
                    className={`h-3 w-3 transition ${
                      isMobileTrainingOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isMobileTrainingOpen ? (
                  <div className="space-y-1 px-2 pb-2">
                    {trainingLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-sm text-neutral-300 transition hover:bg-neutral-900 hover:text-white"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
              <a
                href="#application"
                className="block rounded-xl bg-amber-500 px-4 py-3 font-semibold text-black hover:opacity-90"
              >
                Apply
              </a>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
