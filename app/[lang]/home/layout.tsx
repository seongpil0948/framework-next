import { Metadata } from "next";
import { homeNavItems, homeNavMenuItems, siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import CommonNavbar from "@/app/_components/server-client/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import CommonDrawer from "../../_components/client-only/drawer";
import { TreeSection } from "@/app/_components/client-only/tree-section";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
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
      <CommonNavbar
        navItems={homeNavItems}
        prefix={
          <CommonDrawer
            title="Home Drawer"
            sheetProps={{
              placement: "left",
              // classNames: {
              //   wrapper: clsx("absolute"),
              // },
              // backdrop: "transparent",
              // isDismissable: false,
              // hideCloseButton: true,
            }}
          >
            <TreeSection treeProps={homeNavMenuItems} />
          </CommonDrawer>
        }
      ></CommonNavbar>
      <main
        id="content-container"
        className="pt-16 px-6 flex-grow relative min-w-full"
      >
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
