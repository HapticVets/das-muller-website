"use client";

import Image from "next/image";
import Link from "next/link";
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
    <header className="sticky top-0 z-50 border-b border-neutral-800/90 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logos/das-muller-icon.png"
              alt="Patriot K9 Command logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg bg-neutral-900 p-1 object-contain"
            />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold tracking-[0.2em] text-white sm:text-base">
                PATRIOT K9 COMMAND
              </p>
              <p className="truncate text-[10px] tracking-[0.22em] text-neutral-400 sm:text-xs">
                GERMAN SHEPHERD BREEDING &amp; TRAINING
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/#programs" className="transition hover:text-white">
              Programs
            </Link>
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 transition hover:text-white focus:outline-none"
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

              <div className="invisible absolute left-0 top-full z-50 mt-2 w-72 translate-y-2 rounded-2xl border border-neutral-800 bg-neutral-950/95 p-2 opacity-0 shadow-2xl shadow-black/40 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {trainingLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm text-neutral-300 transition hover:bg-neutral-900 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/apply" className="transition hover:text-white">
              Apply
            </Link>
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

            <Link
              href="/apply"
              aria-label="Apply for a Puppy"
              className="hidden rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90 md:inline-flex"
            >
              Apply for a Puppy
            </Link>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <nav
            id="mobile-nav"
            className="mt-4 rounded-3xl border border-neutral-800 bg-neutral-950 p-4 md:hidden"
          >
            <div className="space-y-2 text-sm text-neutral-300">
              <Link
                href="/"
                className="block rounded-xl px-4 py-3 transition hover:bg-neutral-900 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/#programs"
                className="block rounded-xl px-4 py-3 transition hover:bg-neutral-900 hover:text-white"
              >
                Programs
              </Link>
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
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-sm text-neutral-300 transition hover:bg-neutral-900 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              <Link
                href="/apply"
                aria-label="Apply for a Puppy"
                className="block rounded-xl bg-amber-500 px-4 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Apply for a Puppy
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
