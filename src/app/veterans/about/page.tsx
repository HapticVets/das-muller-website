import type { Metadata } from "next";
import VeteranPlaceholderPage from "@/components/veterans/VeteranPlaceholderPage";
import { buildVeteranMetadata } from "@/lib/veteranSeo";

export const metadata: Metadata = buildVeteranMetadata({
  title: "About Veteran Outreach | Patriot K9 Command",
  description: "About page placeholder for the future Patriot K9 Command Veteran Outreach experience.",
  path: "/about",
});

export default function VeteransAboutPage() {
  return (
    <VeteranPlaceholderPage
      eyebrow="Veteran Outreach"
      title="About Veteran Outreach"
      description="This page is reserved for future Veteran Outreach background and mission content."
    />
  );
}
