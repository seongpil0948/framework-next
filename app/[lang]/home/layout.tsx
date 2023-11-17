import { Metadata } from 'next'

import {
  LANDING_PATH,
  homeNavItems,
  homeNavMenuItems,
  siteConfig,
} from '@/config/site'
import { Link } from '@nextui-org/link'
import CommonNavbar from '@/app/_components/server-client/navbar'
import CommonDrawer from '../../_components/client-only/drawer'
import { TreeSection } from '@/app/_components/client-only/tree-section'
import { layout, main } from '@/app/_components/server-only/primitives'
import { Logo } from '@/app/_components/server-only/icons'

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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={layout()}>
      <CommonNavbar
        navItems={homeNavItems}
        landingPath={LANDING_PATH}
        prefix={
          <CommonDrawer
            title="Home"
            sheetProps={{
              placement: 'left',
            }}
          >
            <TreeSection treeProps={homeNavMenuItems} />
          </CommonDrawer>
        }
      ></CommonNavbar>
      <main id="content-container" className={main()}>
        {children}
      </main>

      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              color="foreground"
              href="/"
              className="mb-4 flex items-center sm:mb-0"
            >
              <Logo />
              <p className="font-bold">ACF</p>
            </Link>
            <div className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
              <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
                © 2023{' '}
                <Link
                  color="foreground"
                  isExternal
                  href="http://www.iabacus.co.kr/"
                  className="hover:underline"
                >
                  Abacus
                </Link>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
