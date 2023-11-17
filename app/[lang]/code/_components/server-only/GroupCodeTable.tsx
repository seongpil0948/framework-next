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
import { Pagination, PaginationProps } from '@nextui-org/pagination'
import { Spinner } from '@nextui-org/spinner'
import { fetcherJson } from '@/app/_utils/fetch'

export default function GroupCodeTable(props: {
  page: number
  setPage?: (i: number) => void
  handleSelect: (code: any) => void
  classNames?: TableProps['classNames']
}) {
  const { page, setPage, handleSelect } = props

  const { data, isLoading } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/code-groups?currentPage=${page}`,
    fetcherJson,
    {
      keepPreviousData: true,
    },
  )
  if (!data) return <div>Loading...</div>
  const { totalPage, data: bodyData, currentPage } = data.body
  const loadingState = isLoading || bodyData?.length === 0 ? 'loading' : 'idle'

  return (
    <>
      <Table
        key={`group-code-table-${page}`}
        aria-label="Group Code Table"
        classNames={props.classNames}
        color="secondary"
        bottomContent={
          totalPage > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={currentPage}
                total={totalPage}
                onChange={(page) => setPage && setPage(page)}
                classNames={{
                  cursor: 'bg-foreground text-background',
                }}
              />
            </div>
          ) : null
        }
      >
        <TableHeader key={'group-code-table-header'}>
          <TableColumn key="codeGroup">그룹코드</TableColumn>
          <TableColumn key="codeGroupName">이름</TableColumn>
          <TableColumn key="codeGroupDescription">설명</TableColumn>
        </TableHeader>
        <TableBody
          key={'group-code-table-body'}
          items={bodyData ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item: any) => (
            <TableRow
              key={item?.codeGroup}
              onClick={() => handleSelect(item.codeGroup)}
            >
              {(columnKey) => {
                const val = getKeyValue(item, columnKey)
                return (
                  <TableCell key={`${item?.codeGroup}-${columnKey}`}>
                    {val}
                  </TableCell>
                )
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}
