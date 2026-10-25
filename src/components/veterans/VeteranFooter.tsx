import VeteranLink from "@/components/veterans/VeteranLink";

import { MAIN_SITE_URL } from "@/lib/siteDomains";



export default function VeteranFooter() {

  return (

    <footer className="border-t border-neutral-900 bg-black">

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-12">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">

            Haptic Veteran Outreach

          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-400">

            An Ohio nonprofit developing veteran connection, practical resources,

            shared adventures, and future learning opportunities. Patriot K9

            Command provides website support as a separate commercial business.

          </p>

        </div>



        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-300">

            Explore

          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-400">

            <VeteranLink href="/veterans/adventures/hocking-hills" className="inline-flex min-h-11 items-center font-semibold text-amber-300 transition hover:text-white">

              Sponsor Hocking Hills

            </VeteranLink>

            <VeteranLink

              href="/veterans/about"

              className="transition hover:text-white"

            >

              About

            </VeteranLink>

            <VeteranLink

              href="/veterans/programs"

              className="transition hover:text-white"

            >

              Programs

            </VeteranLink>

            <VeteranLink

              href="/veterans/partners"

              className="transition hover:text-white"

            >

              Partners

            </VeteranLink>

            <VeteranLink

              href="/veterans/contact"

              className="transition hover:text-white"

            >

              Contact

            </VeteranLink>

          </div>

        </div>



        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-300">

            Contact & information

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

            <a href="mailto:jreese@hapticvets.com" className="break-all transition hover:text-white">jreese@hapticvets.com</a>

            <a href="tel:8132996905" className="transition hover:text-white">(813) 299-6905</a>

            <a href={`${MAIN_SITE_URL}/privacy`} className="transition hover:text-white">Website privacy policy</a>

          </div>

        </div>

      </div>

      <div className="mx-auto max-w-7xl border-t border-neutral-800 px-5 py-6 text-xs leading-6 text-neutral-400 sm:px-8 lg:px-12">

        Haptic Veteran Outreach · Ohio nonprofit · EIN 43-2568035. IRS recognition under section 501(c)(3) is pending; tax-deductibility is not promised. Program availability and sponsorship arrangements are confirmed individually.

      </div>

    </footer>

  );

}
