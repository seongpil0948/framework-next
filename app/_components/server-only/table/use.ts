// 임시, #81 반영시 완료

import { TableProps } from '@nextui-org/table'
import { v4 } from 'uuid'

import { useMemo } from 'react'
import { tableWrapper, table } from './theme'

interface IUseTableProps {
  tableProps: TableProps
}
interface ICommonTableReturn {
  tableProps: TableProps
}

export default function useCmTable(props: IUseTableProps): ICommonTableReturn {
  return {
    tableProps: useTableProps(props),
  }
}

function useTableProps(props: IUseTableProps): TableProps {
  const { tableProps } = props
  const classNames = useMemo<TableProps['classNames']>(
    () => ({
      base: [table()],
      wrapper: [tableWrapper()],
      th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider'],
      td: [
        'cursor-pointer',
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        'group-data-[middle=true]:before:rounded-none',
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
      ],
    }),
    [],
  )
  return {
    ...tableProps,
    key: tableProps.key ?? v4(),
    classNames,
    removeWrapper: true,
  }
}
