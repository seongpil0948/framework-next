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
import { useCommonCodeSwr } from '@/app/[lang]/code/hooks/code'
import useCmTable from '../../../../_components/server-only/table/use'
import getCmPaginationProps from '@/app/_components/server-only/pagination/use'

type Props = {
  page: number
  setPage?: (i: number) => void
  handleSelect: (code: string) => void
  classNames?: TableProps['classNames']
  codeGroup: string
}

export default function CommonCodeTable(props: Props) {
  const { page, setPage, handleSelect, codeGroup } = props
  const { data, isLoading, error } = useCommonCodeSwr({
    params: { codeGroup, currentPage: page },
  })

  const { tableProps } = useCmTable({
    tableProps: {
      'aria-label': 'Common Code Table',
      classNames: props.classNames,
    },
  })

  if (!data || !data.body) return <div>Loading...</div>
  const { totalPage, data: bodyData, currentPage } = data.body
  const { paginationProps } = getCmPaginationProps({
    page: currentPage ?? 0,
    total: totalPage ?? 0,
    onChange: (page) => setPage && setPage(page),
  })

  const isCompleted =
    bodyData && bodyData.length > 0 && totalPage && totalPage > 0
  const loadingState = isLoading ? 'loading' : error ? 'error' : 'idle'

  return (
    <Table
      {...tableProps}
      key={`common-code-table-${page}`}
      bottomContent={isCompleted ? <Pagination {...paginationProps} /> : null}
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
          <TableRow
            key={item?.code}
            onDoubleClick={() => handleSelect(item?.code)}
          >
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
