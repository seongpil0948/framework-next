import clsx from 'clsx'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiFolder } from '@mdi/js'
import { tree } from './theme'

export interface TreeSectionProps {
  id: string
  index: number
  label: string
  href: string
  children?: TreeSectionProps[]
  parentId?: string
}

export function TreeSection(props: {
  treeProps: TreeSectionProps[]
  startDepth?: number
}) {
  let { treeProps, startDepth } = props
  startDepth = startDepth || 0

  const { wrapper, topMenu, menu, menuItem } = tree()

  return (
    <>
      {treeProps.length > 0 && (
        <>
          <ul className={wrapper()}>
            {treeProps.map((item) => (
              <li
                key={item.id}
                className={clsx({
                  [topMenu()]: startDepth === 0,
                  [menu()]: startDepth !== 0,
                })}
              >
                <div className={menuItem()}>
                  {/* <Icon path={mdiFolder} size={0.8} /> */}
                  <Link key={item.id} href={item.href}>
                    {item.label}
                  </Link>
                </div>
                {item.children && (
                  <TreeSection
                    treeProps={item.children}
                    startDepth={startDepth! + 1}
                  />
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}
