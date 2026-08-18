import type { Metadata } from "next";
import VeteranPlaceholderPage from "@/components/veterans/VeteranPlaceholderPage";
import { buildVeteranMetadata } from "@/lib/veteranSeo";

export const metadata: Metadata = buildVeteranMetadata({
  title: "Programs | Patriot K9 Command",
  description: "Programs page placeholder for the future Patriot K9 Command Veteran Outreach experience.",
  path: "/programs",
});

export default function VeteransProgramsPage() {
  return (
    <VeteranPlaceholderPage
      eyebrow="Veteran Outreach"
      title="Programs"
      description="This page is reserved for future Veteran Outreach program information."
    />
  );
}
