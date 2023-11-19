'use client'
import { useMemo, useState } from 'react'
import CommonCodeTable from '../server-only/CommonCodeTable'
import GroupCodeTable from '../server-only/GroupCodeTable'
import { TableProps } from '@nextui-org/table'
import { tableWrapper,table } from '@/app/_components/server-only/primitives'
import useCmTable from '../server-only/table'

export default function CodeController() {
  const [pageIndex, setPageIndex] = useState(1)
  const [selectedGroupCode, setSelectedGroupCode] = useState<
    string | undefined
  >()
  const [selectedCode, setSelectedCode] = useState<string | undefined>()
  const {tableProps} = useCmTable({
     tableProps: {}
   })
  const CmCodeTable = () =>
    selectedGroupCode ? (
      <div className={table({isSplit: true})}>
        <CommonCodeTable
          codeGroup={selectedGroupCode}
          page={pageIndex}
          setPage={(newPage) => setPageIndex(newPage)}
          handleSelect={(code) => setSelectedCode(code)}
          classNames={tableProps.classNames}
        />
        <div className="hidden">
          <CommonCodeTable
            codeGroup={selectedGroupCode}
            page={pageIndex + 1}
            handleSelect={(code) => setSelectedCode(code)}
            classNames={tableProps.classNames}
          />
        </div>
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
        classNames={tableProps.classNames}
      />
      <div className="hidden">
        <GroupCodeTable
          page={pageIndex + 1}
          handleSelect={(code) => setSelectedGroupCode(code)}
          classNames={tableProps.classNames}
        />
      </div>
      <CmCodeTable />
      {/* <p>selected code group: {selectedGroupCode}</p>
      <p>selected code: {selectedCode}</p> */}
    </div>
  )
}
