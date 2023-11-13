import React from 'react'
import { Pagination } from '@nextui-org/pagination'

interface PaginationProps {
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  type?: 'flat' | 'bordered' | 'light' | 'faded'
  size?: 'sm' | 'md' | 'lg'
  useControl?: boolean
  dotsJump?: number
  disabled?: boolean
  total: number
  page?: number
  siblings?: number
  boundaries?: number
  isCompact?: boolean
}

export const CmPagination = ({
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
  ...props
}: PaginationProps) => {
  return (
    <Pagination
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
