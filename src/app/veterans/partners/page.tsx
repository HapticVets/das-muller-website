import type { Metadata } from "next";
import VeteranPlaceholderPage from "@/components/veterans/VeteranPlaceholderPage";
import { buildVeteranMetadata } from "@/lib/veteranSeo";

export const metadata: Metadata = buildVeteranMetadata({
  title: "Partners | Patriot K9 Command",
  description: "Partners page placeholder for the future Patriot K9 Command Veteran Outreach experience.",
  path: "/partners",
});

export default function VeteransPartnersPage() {
  return (
    <VeteranPlaceholderPage
      eyebrow="Veteran Outreach"
      title="Partners"
      description="This page is reserved for future Veteran Outreach partner information."
    />
  );
}
