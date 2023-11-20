import { ReactNode } from 'react'

import {
  Table,
  TableProps,
  TableHeader,
  TableColumn,
  TableBody,
  TableBodyProps,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/table'
import CmPagination from '.././pagination/'
import useCmTable from './use'
import getCmPaginationProps from '.././pagination/use'
import { Spinner } from '@nextui-org/spinner'

interface CmTableProps {
  tableData: {
    headerList: Array<any>
    data: Array<any> | undefined
    currentPage: number
    limit: number
    totalPage: number
  }
  ariaLabel?: string
  classNames?: TableProps['classNames']
  color?: TableProps['color']
  emptyContent?: TableBodyProps<ReactNode>['emptyContent']
  useTotalCount?: boolean
  usePagination?: boolean
  isLoading?: boolean
  selectionMode?: TableProps['selectionMode']
  selectionBehavior?: TableProps['selectionBehavior']
  isHeaderSticky?: TableProps['isHeaderSticky']
  setPage?: (i: number) => void
}

export default function CmTable({
  classNames,
  ariaLabel = 'table',
  color = 'default',
  emptyContent = 'no data',
  useTotalCount = true,
  usePagination = true,
  isLoading,
  tableData,
  selectionMode = 'none',
  selectionBehavior,
  isHeaderSticky = false,
  setPage,
}: CmTableProps) {
  const { totalPage, data: bodyData, currentPage } = tableData
  const { tableProps } = useCmTable({
    tableProps: {
      classNames: classNames,
    },
  })
  const totalCount = tableData.data ? tableData.data.length : 0

  const { paginationProps } = getCmPaginationProps({
    page: currentPage ?? 0,
    total: totalPage ?? 0,
    onChange: (page) => setPage && setPage(page),
  })

  return (
    <>
      {/* topContent */}
      <div className="mb-3 flex items-center justify-between">
        {useTotalCount ? (
          <span className="text-small text-default-400">
            Total Count: {totalCount}
          </span>
        ) : null}
      </div>
      <Table
        {...tableProps}
        classNames={classNames}
        aria-label={ariaLabel}
        color={color}
        selectionMode={selectionMode}
        selectionBehavior={selectionBehavior}
        isHeaderSticky={isHeaderSticky}
      >
        <TableHeader>
          {tableData.headerList?.map((column: any) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody
          items={bodyData}
          isLoading={isLoading}
          loadingContent={<Spinner label="Loading..." />}
          emptyContent={emptyContent}
        >
          {(item: any) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {/* bottomContent */}
      <div className="mt-3 flex justify-between">
        {totalCount > 0 && usePagination ? (
          <CmPagination {...paginationProps} />
        ) : null}
      </div>
    </>
  )
}
