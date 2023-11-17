import clsx from 'clsx'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiFolder } from '@mdi/js'

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
  return (
    <ul
      className={clsx('flex gap-3 justify-start flex-col')}
    >
      {treeProps.map((item) => (
        <li key={item.id} className={clsx('flex items-center rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-100/5 transition-all cursor-pointer')}>
          <div className="inline-flex items-center gap-2">
            <Icon path={mdiFolder} size={0.8} />
            <Link
              key={item.id}
              href={item.href}
            >
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
  )
}
