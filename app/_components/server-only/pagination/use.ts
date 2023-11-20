import { useMemo } from 'react'
import { PaginationProps } from '@nextui-org/pagination'
import { pagination } from './theme'
import clsx from 'clsx'

type TUserCmPaginationReturn = {
  paginationProps: PaginationProps
}

export default function getCmPaginationProps(
  props: PaginationProps,
): TUserCmPaginationReturn {
  return {
    paginationProps: {
      classNames: {
        base: clsx(pagination(), props.classNames?.base),
      },
      isCompact: true,
      showControls: true,
      showShadow: true,
      color: 'primary',
      ...props,
    },
  }
}
