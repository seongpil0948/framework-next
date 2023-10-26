import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

import { Metadata } from "next";
import { homeNavItems, homeNavMenuItems, siteConfig } from "@/config/site";
import Navbar from "@/app/_components/server-client/navbar";
import { Link } from "@nextui-org/link";

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
      <Navbar navItems={homeNavItems} navMenuItems={homeNavMenuItems} />
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
