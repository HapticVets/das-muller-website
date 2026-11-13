import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getVeteranRewritePath,
  isVeteranHostname,
} from "@/lib/veteranRouting";

export function proxy(request: NextRequest) {
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");

  if (!isVeteranHostname(host)) {
    return NextResponse.next();
  }

  if (["/favicon.ico", "/icon.png", "/apple-icon.png"].includes(request.nextUrl.pathname)) {
    return NextResponse.rewrite(new URL("/outreach-icon.svg", request.url));
  }

  const rewritePath = getVeteranRewritePath(request.nextUrl.pathname);

  if (!rewritePath) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = rewritePath;

  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: [
    "/favicon.ico", "/icon.png", "/apple-icon.png",
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|site.webmanifest|.*\\..*).*)",
  ],
};
