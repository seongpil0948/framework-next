'use client'
import { useMemo, useState } from 'react'
import CommonCodeTable from '../server-only/CommonCodeTable'
import GroupCodeTable from '../server-only/GroupCodeTable'
import { TableProps } from '@nextui-org/table'
import { tableWrapper,table } from '@/app/_components/server-only/primitives'

export default function CodeController() {
  const [pageIndex, setPageIndex] = useState(1)
  const [selectedGroupCode, setSelectedGroupCode] = useState<
    string | undefined
  >()
  const [selectedCode, setSelectedCode] = useState<string | undefined>()
  const classNames = useMemo<TableProps['classNames']>(
    () => ({
      base: [table()],
      th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider'],
      td: [
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        'group-data-[middle=true]:before:rounded-none',
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
      ],
    }),
    [],
  )
  const CmCodeTable = () =>
    selectedGroupCode ? (
      <div className={tableWrapper()}>
        <div className="hidden">
          <CommonCodeTable
            codeGroup={selectedGroupCode}
            page={pageIndex}
            setPage={(newPage) => setPageIndex(newPage)}
            handleSelect={(code) => setSelectedCode(code)}
          />
        </div>
        <CommonCodeTable
          codeGroup={selectedGroupCode}
          page={pageIndex + 1}
          handleSelect={(code) => setSelectedCode(code)}
        />
      </div>
    ) : (
      <></>
    )
  return (
    <div className={tableWrapper()}>
      <GroupCodeTable
        page={pageIndex}
        setPage={(newPage) => setPageIndex(newPage)}
        handleSelect={(code) => setSelectedGroupCode(code)}
        classNames={classNames}
      />
      <div className="hidden">
        <GroupCodeTable
          page={pageIndex + 1}
          handleSelect={(code) => setSelectedGroupCode(code)}
          classNames={classNames}
        />
      </div>
      <CmCodeTable />
      {/* <p>selected code group: {selectedGroupCode}</p>
      <p>selected code: {selectedCode}</p> */}
    </div>
  )
}
