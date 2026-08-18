import type { Metadata } from "next";
import VeteranPlaceholderPage from "@/components/veterans/VeteranPlaceholderPage";
import { buildVeteranMetadata } from "@/lib/veteranSeo";

export const metadata: Metadata = buildVeteranMetadata({
  title: "Contact | Patriot K9 Command",
  description: "Contact page placeholder for the future Patriot K9 Command Veteran Outreach experience.",
  path: "/contact",
});

export default function VeteransContactPage() {
  return (
    <VeteranPlaceholderPage
      eyebrow="Veteran Outreach"
      title="Contact"
      description="This page is reserved for future Veteran Outreach contact details and intake options."
    />
  );
}
