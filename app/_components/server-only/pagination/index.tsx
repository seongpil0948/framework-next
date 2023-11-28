import React from 'react'
import { Pagination, PaginationProps } from '@nextui-org/pagination'

interface CmPaginationProps {
  classNames?: PaginationProps['classNames']
  color?: PaginationProps['color']
  type?: PaginationProps['variant']
  size?: PaginationProps['size']
  useControl?: PaginationProps['showControls']
  dotsJump?: PaginationProps['dotsJump']
  disabled?: PaginationProps['isDisabled']
  total: PaginationProps['total']
  page?: PaginationProps['page']
  siblings?: PaginationProps['siblings']
  boundaries?: PaginationProps['boundaries']
  isCompact?: PaginationProps['isCompact']
}

export default function CmPagination({
  classNames,
  color = 'primary',
  type = 'flat',
  size = 'md',
  useControl = true,
  dotsJump = 5,
  disabled = false,
  total = 20,
  page = 1,
  siblings = 2,
  boundaries = 0,
  isCompact = false,
}: CmPaginationProps) {
  return (
    <Pagination
      classNames={classNames}
      color={color}
      variant={type}
      size={size}
      showControls={useControl}
      dotsJump={dotsJump}
      isDisabled={disabled}
      total={total}
      page={page}
      siblings={siblings}
      boundaries={boundaries}
      isCompact={isCompact}
    />
  )
}
