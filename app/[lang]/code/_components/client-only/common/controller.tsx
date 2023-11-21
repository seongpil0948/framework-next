'use client'

import { useState } from 'react'
import useCmTable from '@/app/_components/server-only/table/use'
import { selectCommonCode } from '../../../store/common'
import { useCodeDispatch, useCodeSelector } from '../../../store/store'
import CommonCodeDetail from './detail'
import CommonCodeTable from '../../server-only/CommonCodeTable'

export default function CommonCodeController() {
  const [pageIndex, setPageIndex] = useState(1)
  const { tableProps } = useCmTable({
    tableProps: {},
  })
  const dispatch = useCodeDispatch()
  const selectedCode = useCodeSelector((state) => state.codeSlice.selectedCode)
  const selectedCodeGroup = useCodeSelector(
    (state) => state.codeSlice.selectedCodeGroup,
  )

  if (!selectedCodeGroup) return <></>
  const component = [
    <div key="common-code-table">
      <CommonCodeTable
        codeGroup={selectedCodeGroup}
        page={pageIndex}
        setPage={(newPage) => setPageIndex(newPage)}
        handleSelect={(code) => dispatch(selectCommonCode(code))}
        classNames={tableProps.classNames}
      />
      <div className="hidden">
        <CommonCodeTable
          codeGroup={selectedCodeGroup}
          page={pageIndex + 1}
          handleSelect={(code) => dispatch(selectCommonCode(code))}
          classNames={tableProps.classNames}
        />
      </div>
    </div>,
  ]
  if (selectedCode) {
    component.push(
      <CommonCodeDetail
        key={`common-code-detail-${selectedCode}`}
        commonCode={selectedCode}
        groupCode={selectedCodeGroup}
        modalProps={{
          isOpen: !!selectedCode && !!selectedCodeGroup,
          onOpenChange: (isOpen) => {
            if (!isOpen) dispatch(selectCommonCode(undefined))
          },
        }}
      />,
    )
  }
  return <>{...component}</>
}
