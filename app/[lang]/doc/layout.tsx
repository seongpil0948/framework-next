import { Metadata } from 'next'
import {
  LANDING_PATH,
  docNavMenuItems,
  homeNavItems,
  siteConfig,
} from '@/config/site'
import CommonNavbar from '@/app/_components/server-client/navbar'
import CommonDrawer from '@/app/_components/client-only/drawer'
import { TreeSection } from '@/app/_components/client-only/tree-section'
import { docWrapper } from '@/app/_components/server-only/primitives'

export const metadata: Metadata = {
  description: 'Abacus Documentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <CommonNavbar landingPath={LANDING_PATH} navItems={homeNavItems}>
        <CommonDrawer title="Doc Drawer">
          <TreeSection treeProps={docNavMenuItems} />
        </CommonDrawer>
      </CommonNavbar>
      <main className={docWrapper()}>{children}</main>
    </div>
  )
}
