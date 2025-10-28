import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("admin-auth")?.value;
  const pathname = request.nextUrl.pathname;

  // 🔐 Redirect to login only if it's a dashboard route AND NOT the login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
