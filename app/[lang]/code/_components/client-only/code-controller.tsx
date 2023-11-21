'use client'

import { tableWrapper } from '@/app/_components/server-only/primitives'
import GroupCodeTable from '../server-only/GroupCodeTable'
import CommonCodeController from './common/controller'
import { useState } from 'react'
import { useCodeDispatch } from '../../store/store'
import { selectCommonCode, selectGroupCode } from '../../store/common'
import useCmTable from '@/app/_components/server-only/table/use'

export default function CodeController() {
  const [pageIndex, setPageIndex] = useState(1)
  const dispatch = useCodeDispatch()
  const { tableProps } = useCmTable({
    tableProps: {},
  })
  return (
    <div className={tableWrapper()}>
      <GroupCodeTable
        page={pageIndex}
        setPage={(newPage) => setPageIndex(newPage)}
        handleSelect={(code) => dispatch(selectGroupCode(code))}
        classNames={tableProps.classNames}
      />
      <div className="hidden">
        <GroupCodeTable
          page={pageIndex + 1}
          handleSelect={(code) => dispatch(selectGroupCode(code))}
          classNames={tableProps.classNames}
        />
      </div>
      <CommonCodeController />
    </div>
  )
}
