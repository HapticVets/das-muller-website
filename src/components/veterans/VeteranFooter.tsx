import Link from "next/link";
import { MAIN_SITE_URL } from "@/lib/siteDomains";

export default function VeteranFooter() {
  return (
    <footer className="border-t border-neutral-900 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
            Patriot K9 Command Veteran Outreach
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-400">
            This outreach section carries forward the Haptic Nation Veteran
            Outreach mission inside Patriot K9 Command while preserving the
            focus on practical skills, canine development, land-based
            responsibility, and purpose after service.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-300">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-400">
            <Link href="/veterans/about" className="transition hover:text-white">
              About
            </Link>
            <Link
              href="/veterans/programs"
              className="transition hover:text-white"
            >
              Programs
            </Link>
            <Link
              href="/veterans/partners"
              className="transition hover:text-white"
            >
              Partners
            </Link>
            <Link
              href="/veterans/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-300">
            Patriot K9
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-400">
            <a
              href={MAIN_SITE_URL}
              className="transition hover:text-white"
              rel="noreferrer"
              target="_blank"
            >
              Main Website
            </a>
            <a
              href={`${MAIN_SITE_URL}/training/evaluation`}
              className="transition hover:text-white"
              rel="noreferrer"
              target="_blank"
            >
              Training Evaluation
            </a>
            <a
              href={`${MAIN_SITE_URL}/apply`}
              className="transition hover:text-white"
              rel="noreferrer"
              target="_blank"
            >
              Puppy Application
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
