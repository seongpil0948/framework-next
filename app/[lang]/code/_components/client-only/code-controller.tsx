'use client'
import { useMemo, useState } from 'react'
import CommonCodeTable from '../server-only/CommonCodeTable'
import GroupCodeTable from '../server-only/GroupCodeTable'
import { TableProps } from '@nextui-org/table'

export default function CodeController() {
  const [pageIndex, setPageIndex] = useState(1)
  const [selectedGroupCode, setSelectedGroupCode] = useState<
    string | undefined
  >()
  const [selectedCode, setSelectedCode] = useState<string | undefined>()
  const classNames = useMemo<TableProps['classNames']>(
    () => ({
      // wrapper: ["max-h-[382px]", "max-w-3xl"],
      tr: ['hover:bg-foreground hover:text-background cursor-pointer'],
      th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider'],
      td: [
        // changing the rows border radius
        // first
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        // middle
        'group-data-[middle=true]:before:rounded-none',
        // last
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
      ],
    }),
    [],
  )
  const CmCodeTable = () =>
    selectedGroupCode ? (
      <div>
        <CommonCodeTable
          codeGroup={selectedGroupCode}
          page={pageIndex}
          setPage={(newPage) => setPageIndex(newPage)}
          handleSelect={(code) => setSelectedCode(code)}
        />
        <div style={{ display: 'none' }}>
          <CommonCodeTable
            codeGroup={selectedGroupCode}
            page={pageIndex + 1}
            handleSelect={(code) => setSelectedCode(code)}
          />
        </div>
      </div>
    ) : (
      <></>
    )
  return (
    <div className="flex flex-wrap">
      <div>
        <GroupCodeTable
          page={pageIndex}
          setPage={(newPage) => setPageIndex(newPage)}
          handleSelect={(code) => setSelectedGroupCode(code)}
          classNames={classNames}
        />
        <div style={{ display: 'none' }}>
          <GroupCodeTable
            page={pageIndex + 1}
            handleSelect={(code) => setSelectedGroupCode(code)}
          />
        </div>
      </div>
      <>
        <p>selected code group: {selectedGroupCode}</p>
        <p>selected code: {selectedCode}</p>
        <CmCodeTable />
      </>
    </div>
  )
}
