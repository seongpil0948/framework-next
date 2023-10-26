import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LANDING_PATH } from "./config/site";
import { splitLocaleAndPath, getLocaleRequest } from "./app/_utils/locale";
import { TAvailLocale } from "./config/system";

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    // "/about/:path*",
    // "/blog/:path*",
    // "/code/:path*",
    "/signin",
    "/code",
    "/doc",
    "/home",
    "/",
  ],
};

export async function middleware(request: NextRequest, response: NextResponse) {
  let nextP = request.nextUrl.pathname;
  let { locale, path: onlyPath } = splitLocaleAndPath(nextP);

  if (response.status === 401 && !onlyPath.includes("signin")) {
    onlyPath = "/signin";
  } else if (onlyPath === "/") {
    onlyPath = LANDING_PATH;
  }

  if (!locale) {
    locale = getLocaleRequest(request);
  }

  const join = (p: string, l: string) =>
    new URL(`/${l}${p.startsWith("/") ? "" : "/"}${p}`, request.url);

  const nextUrl = join(onlyPath, locale);
  if (nextUrl.pathname === nextP) {
    return NextResponse.next();
  }
  // TODO: discuss status code with team
  return NextResponse.redirect(nextUrl, { status: 301 });
}
