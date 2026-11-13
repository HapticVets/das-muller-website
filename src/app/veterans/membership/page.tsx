import { redirect } from "next/navigation";
import { buildVeteranSiteUrl } from "@/lib/siteDomains";

export default function MembershipPage() {
  redirect(buildVeteranSiteUrl("/contact"));
}
