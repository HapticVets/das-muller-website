import type { Metadata } from "next";
import { headers } from "next/headers";
import VeteranFooter from "@/components/veterans/VeteranFooter";
import { VeteranRouteProvider } from "@/components/veterans/VeteranRouteProvider";
import VeteranNav from "@/components/veterans/VeteranNav";
import { isVeteranHostname } from "@/lib/veteranRouting";
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
      <VeteranNav />
      <main className="min-h-screen bg-neutral-950 text-white">{children}</main>
      <VeteranFooter />
    </VeteranRouteProvider>
  );
}
