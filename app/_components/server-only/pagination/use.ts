import { PaginationProps } from '@nextui-org/pagination'
import { pagination } from '@/app/_components/server-only/primitives'
import clsx from 'clsx'

type TUserCmPaginationReturn = {
  paginationProps: PaginationProps
}

export default function getCmPaginationProps(
  props: PaginationProps,
): TUserCmPaginationReturn {
  return {
    paginationProps: {
      isCompact: true,
      showControls: true,
      showShadow: true,
      color: 'primary',
      classNames: {
        base: clsx(pagination(), props.classNames?.base),
      },
      ...props,
    },
  }
}
