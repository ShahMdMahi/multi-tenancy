import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";

  // 1. Define your primary platform domains to exclude them from rewriting
  const excludeDomains = [
    "localhost:3000",
    "multi-tenancy-shahmdmahi.vercel.app",
    "www.multi-tenancy-shahmdmahi.vercel.app",
  ];

  // 2. Bypass proxy logic for Next.js internal files, static assets, or API endpoints
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".") // Skips public files like favicon.ico, images, etc.
  ) {
    return NextResponse.next();
  }

  // 3. Match tenant domains (shahmdmahi.com, example.com, etc.)
  if (!excludeDomains.includes(hostname)) {
    // Avoid a routing loop if the request is already internally tracking the workspace
    if (!url.pathname.startsWith("/workspace")) {
      // Secretly rewrite the path to point directly to your workspace folder structure
      url.pathname = `/workspace/${hostname}${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

// 4. Configure the matcher to target incoming page paths cleanly
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. Static asset files (e.g. favicon.ico)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
