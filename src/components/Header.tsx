"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const trainingLinks = [
  { href: "/boarding", label: "Overnight Boarding" },
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
              src="/icon.png"
              alt="Patriot K9 Command logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg bg-neutral-900 p-1 object-contain"
            />
            <div className="min-w-0 leading-tight">
              <p className="text-xs font-semibold tracking-[0.12em] text-white min-[390px]:text-sm min-[390px]:tracking-[0.16em] sm:text-base sm:tracking-[0.2em]">
                PATRIOT K9 <span className="hidden min-[360px]:inline">COMMAND</span>
              </p>
              <p className="text-[9px] tracking-[0.12em] text-neutral-400 min-[420px]:text-[10px] min-[420px]:tracking-[0.18em] sm:text-xs sm:tracking-[0.22em]">
                BREEDING &amp; TRAINING
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-neutral-300 lg:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/#programs" className="transition hover:text-white">
              Programs
            </Link>
            <Link href="/our-dogs" className="transition hover:text-white">
              Our Dogs
            </Link>
            <Link href="/veterans" className="transition hover:text-white">
              Veterans Outreach
            </Link>
            <div className="group relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-controls="training-services-menu"
                className="flex items-center gap-2 transition hover:text-white focus:outline-none"
              >
                <span>Training &amp; Boarding</span>
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

              <div id="training-services-menu" className="invisible absolute left-0 top-full z-50 mt-2 w-72 translate-y-2 rounded-2xl border border-neutral-800 bg-neutral-950/95 p-2 opacity-0 shadow-2xl shadow-black/40 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
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
            <Link href="/ai-dog-trainer" className="transition hover:text-white">
              AI Dog Trainer
            </Link>
            <Link href="/apply" className="transition hover:text-white">
              Apply
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/inquire"
              aria-label="Request training or boarding availability"
              className="inline-flex min-h-11 items-center rounded-xl bg-amber-500 px-3 py-2 text-sm font-semibold text-black transition hover:opacity-90 lg:px-4"
            >
              <span className="lg:hidden">Inquire</span>
              <span className="hidden lg:inline">Request Availability</span>
            </Link>
            <button
              type="button"
              className="min-h-11 rounded-xl border border-neutral-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-900 lg:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              Menu
            </button>

          </div>
        </div>

        {isMobileMenuOpen ? (
          <nav
            id="mobile-nav"
            className="mt-4 rounded-3xl border border-neutral-800 bg-neutral-950 p-4 lg:hidden"
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
              <Link
                href="/our-dogs"
                className="block rounded-xl px-4 py-3 transition hover:bg-neutral-900 hover:text-white"
              >
                Our Dogs
              </Link>
              <Link
                href="/veterans"
                className="block rounded-xl px-4 py-3 transition hover:bg-neutral-900 hover:text-white"
              >
                Veterans Outreach
              </Link>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-neutral-900 hover:text-white"
                  onClick={() => setIsMobileTrainingOpen((open) => !open)}
                  aria-expanded={isMobileTrainingOpen}
                >
                  <span>Training & Boarding</span>
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
                href="/ai-dog-trainer"
                className="block rounded-xl px-4 py-3 transition hover:bg-neutral-900 hover:text-white"
              >
                AI Dog Trainer
              </Link>
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
