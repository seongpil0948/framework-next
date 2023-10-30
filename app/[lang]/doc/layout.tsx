import { Metadata } from "next";
import { docNavMenuItems, homeNavItems } from "@/config/site";
import { Link } from "@nextui-org/link";
import CommonNavbar from "@/app/_components/server-client/navbar";
import CommonDrawer from "@/app/_components/client-only/drawer";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";

export const metadata: Metadata = {
  description: "Abacus Documentation",
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
            {docNavMenuItems.map((item) => (
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
    </div>
  );
}
