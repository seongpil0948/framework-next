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
import useCmTable from '../../../../_components/server-only/table/use'
import getCmPaginationProps from '@/app/_components/server-only/pagination/use'
import useFetcher from '@/app/_utils/hooks/fetch'
import { useDictionary } from '@/app/_utils/hooks/locale'

export default function GroupCodeTable(props: {
  page: number
  setPage?: (i: number) => void
  handleSelect: (code: any) => void
  classNames?: TableProps['classNames']
}) {
  const { page, setPage, handleSelect } = props
  const { fetcherJson } = useFetcher()
  const dict = useDictionary()
  const { tableProps } = useCmTable({
    tableProps: {
      'aria-label': 'Group Code Table',
      classNames: props.classNames,
    },
  })
  const { data, isLoading } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/code-groups?currentPage=${page}`,
    fetcherJson,
    {
      keepPreviousData: true,
    },
  )
  if (!data) return <div>{dict && dict['common']['loading']}</div>
  const { totalPage, data: bodyData, currentPage } = data.body
  const { paginationProps } = getCmPaginationProps({
    page: currentPage ?? 0,
    total: totalPage ?? 0,
    onChange: (page) => setPage && setPage(page),
  })
  const loadingState = isLoading || bodyData?.length === 0 ? 'loading' : 'idle'

  return (
    <Table
      {...tableProps}
      key={`group-code-table-${page}`}
      bottomContent={totalPage > 0 ? <Pagination {...paginationProps} /> : null}
    >
      <TableHeader key={'group-code-table-header'}>
        <TableColumn key="codeGroup">
          {dict && dict['code']['label']['groupCode']}
        </TableColumn>
        <TableColumn key="codeGroupName">
          {dict && dict['code']['label']['name']}
        </TableColumn>
        <TableColumn key="codeGroupDescription">
          {dict && dict['code']['label']['description']}
        </TableColumn>
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
  )
}
