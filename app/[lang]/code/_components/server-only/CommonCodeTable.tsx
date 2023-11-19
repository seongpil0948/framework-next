import useSWR from 'swr'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  TableProps,
} from '@nextui-org/table'
import { Pagination } from '@nextui-org/pagination'
import { Spinner } from '@nextui-org/spinner'
import { fetcherJson } from '@/app/_utils/fetch'
import { pagination } from '@/app/_components/server-only/primitives'
import useCommonCode from '@/app/_utils/hooks/code'
import useCmTable, { getCmPagination } from './table'
import { use } from 'react'

export default function CommonCodeTable(props: {
  page: number
  setPage?: (i: number) => void
  handleSelect: (code: any) => void
  classNames?: TableProps['classNames']
  codeGroup: string
}) {
  const { page, setPage, handleSelect, codeGroup } = props
  const { data, isLoading, error } = useCommonCode({
    params: { codeGroup, currentPage: page },
  })

  const { tableProps } = useCmTable({
    tableProps: {
      'aria-label': 'Common Code Table',
      classNames: props.classNames,
    },
  })

  if (!data) return <div>Loading...</div>
  console.log('data', data)
  const { totalPage, data: bodyData, currentPage } = data.body
  const isCompleted =
    bodyData && bodyData.length > 0 && totalPage && totalPage > 0
  const loadingState = isLoading ? 'loading' : error ? 'error' : 'idle'

  return (
    <Table
      {...tableProps}
      key={`common-code-table-${page}`}
      bottomContent={
        isCompleted ? (
          <Pagination
            {...getCmPagination({
              page: currentPage,
              total: totalPage,
              onChange: (page) => setPage && setPage(page),
            }).paginationProps}
          />
        ) : null
      }
    >
      <TableHeader key={'common-code-table-header'}>
        <TableColumn key="code">코드</TableColumn>
        <TableColumn key="codeName">이름</TableColumn>
        <TableColumn key="codeValue">값</TableColumn>
        <TableColumn key="codeDescription">설명</TableColumn>
        <TableColumn key="useYn">사용여부</TableColumn>
      </TableHeader>
      <TableBody
        key={'common-code-table-body'}
        items={bodyData}
        loadingContent={<Spinner />}
        loadingState={loadingState}
        emptyContent={'No rows to display.'}
      >
        {(item) => (
          <TableRow key={item?.code} onClick={() => handleSelect(item?.code)}>
            {(columnKey) => {
              const val = getKeyValue(item, columnKey)
              return (
                <TableCell key={`${item?.code}-${columnKey}`}>{val}</TableCell>
              )
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
