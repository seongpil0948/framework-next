import CommonDrawer from '@/app/_components/client-only/drawer'
import { TreeSection } from '@/app/_components/client-only/tree-section'
import CommonNavbar from '@/app/_components/server-client/navbar'
import { homeNavItems, LANDING_PATH, homeNavMenuItems } from '@/config/site'
import { main } from '@/app/_components/server-only/primitives'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <CommonNavbar
        navItems={homeNavItems}
        landingPath={LANDING_PATH}
        prefix={
          <CommonDrawer
            title="Home Drawer"
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
    </div>
  )
}
