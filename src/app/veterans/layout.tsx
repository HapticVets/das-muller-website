import type { Metadata } from "next";
import { headers } from "next/headers";
import VeteranFooter from "@/components/veterans/VeteranFooter";
import { VeteranRouteProvider } from "@/components/veterans/VeteranRouteProvider";
import VeteranNav from "@/components/veterans/VeteranNav";
import { isVeteranHostname } from "@/lib/veteranRouting";
import { VETERAN_SITE_URL } from "@/lib/siteDomains";
import {
  VETERAN_SITE_DESCRIPTION,
  VETERAN_SITE_NAME,
  veteranMetadataBase,
} from "@/lib/veteranSeo";

export const metadata: Metadata = {
  metadataBase: veteranMetadataBase,
  title: {
    absolute: VETERAN_SITE_NAME,
  },
  description: VETERAN_SITE_DESCRIPTION,
};

export default async function VeteransLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const useSubdomainPaths = isVeteranHostname(host);

  return (
    <VeteranRouteProvider useSubdomainPaths={useSubdomainPaths}>
      <a href="#outreach-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-amber-400 focus:p-4 focus:text-black">Skip to outreach content</a>
      <VeteranNav />
      <main id="outreach-content" className="min-h-screen bg-neutral-950 text-white">{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"Haptic Veteran Outreach",url:VETERAN_SITE_URL,email:"jreese@hapticvets.com",telephone:"+1-813-299-6905",description:"Ohio nonprofit developing veteran connection, resources, and planned community activities."}).replace(/</g,"\u003c")}} />
      <VeteranFooter />
    </VeteranRouteProvider>
  );
}
