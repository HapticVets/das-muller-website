"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useVeteranRouteMode } from "@/components/veterans/VeteranRouteProvider";
import { getVeteranHref } from "@/lib/veteranRouting";

type VeteranLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function VeteranLink({
  href,
  ...props
}: VeteranLinkProps) {
  const useSubdomainPaths = useVeteranRouteMode();

  return <Link href={getVeteranHref(href, useSubdomainPaths)} {...props} />;
}
