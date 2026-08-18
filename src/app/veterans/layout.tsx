import type { Metadata } from "next";
import VeteranFooter from "@/components/veterans/VeteranFooter";
import VeteranNav from "@/components/veterans/VeteranNav";
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

export default function VeteransLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VeteranNav />
      <main className="min-h-screen bg-neutral-950 text-white">{children}</main>
      <VeteranFooter />
    </>
  );
}
