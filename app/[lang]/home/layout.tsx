import { Metadata } from "next";
import { homeNavItems, homeNavMenuItems, siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import CommonNavbar from "@/app/_components/server-client/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import CommonDrawer from "../../_components/client-only/drawer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <CommonNavbar navItems={homeNavItems}>
        <CommonDrawer title="Home Drawer">
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {homeNavMenuItems.map((item) => (
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </CommonDrawer>
      </CommonNavbar>
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="http://www.iabacus.co.kr/"
          title="abacus.org homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">Abacus</p>
        </Link>
      </footer>
    </div>
  );
}
