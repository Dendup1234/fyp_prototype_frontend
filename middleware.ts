import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define all protected routes (you can add more)
const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
  "/documents(.*)",
  "/studentlist(.*)",
]);

export default clerkMiddleware(async(auth, req) => {
  // Check if the request path matches a protected route
  if (isProtectedRoute(req)) {
    // If user is not signed in, redirect them to /auth/signin
    const { userId } = await auth();
    if (!userId) {
      const signInUrl = new URL("/signin", req.url);
      signInUrl.searchParams.set("reason", "unauthenticated");
      signInUrl.searchParams.set("next", req.nextUrl.pathname + req.nextUrl.search);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Continue to requested page
  return NextResponse.next();
});

//Ensure middleware runs only for non-static routes
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map)$).*)",
  ],
};
