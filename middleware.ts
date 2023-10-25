import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LANDING_PATH } from "./config/site";

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|image/*|sw|work*.js|manifest).*)",
    // "/about/:path*",
    // "/blog/:path*",
    // "/code/:path*",
    // "/signin",
    // "/:path*",
  ],
};
let initial = true;
export async function middleware(request: NextRequest, response: NextResponse) {
  console.log(
    `[middleware] from  ${request.url} to: ${request.nextUrl.pathname}`
  );
  if (request.nextUrl.pathname === "/") {
    console.log(`rewrite to  ${LANDING_PATH}`);
    return NextResponse.rewrite(new URL(LANDING_PATH, request.url));
  }
  NextResponse.next();
}
