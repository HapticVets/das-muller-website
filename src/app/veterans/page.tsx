import type { Metadata } from "next";
import VeteranPlaceholderPage from "@/components/veterans/VeteranPlaceholderPage";
import { buildVeteranMetadata } from "@/lib/veteranSeo";

export const metadata: Metadata = buildVeteranMetadata({
  title: "Veteran Outreach | Patriot K9 Command",
  path: "/",
});

export default function VeteransPage() {
  return (
    <VeteranPlaceholderPage
      eyebrow="Veteran Outreach"
      title="Veteran Outreach"
      description="This internal route namespace is reserved for the future Patriot K9 Command Veteran Outreach experience."
    />
  );
}
