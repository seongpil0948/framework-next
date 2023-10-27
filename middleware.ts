import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LANDING_PATH } from "./config/site";
import { splitLocaleAndPath, getLocaleRequest } from "./app/_utils/locale";
import { TAvailLocale } from "./config/system";

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api/*|_next/static|_next/image|favicon.ico|image/*|sw|worker|peach-service-worker).*)",
    "/dsi/api/:path*",
    // "/((?!api|_next/static|favicon.ico).*)",
    // "/code/:path*",
    // "/signin",
    // "/doc",
    // "/home",
    // "/",
  ],
};

export async function middleware(request: NextRequest, response: NextResponse) {
  let nextP = request.nextUrl.pathname;
  let { locale, path: onlyPath } = await splitLocaleAndPath(nextP);

  if (response.status === 401 && !onlyPath.includes("signin")) {
    onlyPath = "/signin";
  } else if (onlyPath === "/") {
    onlyPath = LANDING_PATH;
  }

  if (onlyPath.includes("/api")) {
    locale = undefined;
  } else if (!locale) {
    locale = getLocaleRequest(request);
  }
  console.log({ onlyPath, locale, nextP });

  const join = (p: string, l?: string) => {
    if (!l) return new URL(p, request.url);
    return new URL(`/${l}${p.startsWith("/") ? "" : "/"}${p}`, request.url);
  };

  const nextUrl = join(onlyPath, locale);
  if (nextUrl.pathname === nextP) {
    console.log(" go next ");
    return NextResponse.next();
  }
  // TODO: discuss status code with team
  console.log(`go redirect from ${nextP} to ${nextUrl.pathname}`);
  return NextResponse.redirect(nextUrl, { status: 301 });
}
