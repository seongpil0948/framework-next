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

export default function CommonCodeTable(props: {
  page: number
  setPage?: (i: number) => void
  handleSelect: (code: any) => void
  classNames?: TableProps['classNames']
  codeGroup: string
}) {
  const { page, setPage, handleSelect, codeGroup } = props

  const { data, isLoading } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes?codeGroup=${codeGroup}&currentPage=${page}`,
    fetcherJson,
    {
      keepPreviousData: true,
    },
  )
  if (!data) return <div>Loading...</div>
  const { totalPage, data: bodyData, currentPage } = data.body
  const loadingState = isLoading  ? 'loading' : !bodyData   ? 'error':  'idle'

  return (
      <Table
        key={`common-code-table-${page}`}
        aria-label="Common Code Table"
        classNames={props.classNames}
        removeWrapper 
        bottomContent={
          totalPage > 0 ? (
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={currentPage}
              total={totalPage}
              onChange={(page) => setPage && setPage(page)}
              classNames={{
                base: pagination()
              }}
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
          items={bodyData ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
          emptyContent={"No rows to display."}
        >
          {(item: any) => (
            <TableRow key={item?.code} onClick={() => handleSelect(item?.code)}>
              {(columnKey) => {
                const val = getKeyValue(item, columnKey)
                return (
                  <TableCell key={`${item?.code}-${columnKey}`}>
                    {val}
                  </TableCell>
                )
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
  )
}