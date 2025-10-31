import { NextResponse } from "next/server";

/**
 * Temporary middleware that lets every request through without hitting Clerk.
 * Re-enable authentication by restoring the Clerk middleware logic when ready.
 */
export default function middleware() {
  return NextResponse.next();
}

//Ensure middleware runs only for non-static routes
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map)$).*)",
  ],
};
