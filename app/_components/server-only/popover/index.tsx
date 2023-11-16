import React, { ReactNode } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover'

interface PopoverProps {
  trigger: ReactNode
  contents: ReactNode
  placement?:
    | 'top'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end'
  showArrow?: boolean
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  backdrop?: 'transparent' | 'opaque' | 'blur'
  offset?: number
  containerPadding?: number
  triggerType?: 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid'
  isKeyboardDismissDisabled?: boolean
}

export const CmPopover = ({
  trigger,
  contents,
  placement = 'right',
  showArrow = false,
  color = 'default',
  size = 'md',
  radius = 'md',
  backdrop = 'transparent',
  offset = 7,
  containerPadding = 12,
  triggerType = 'dialog',
  isKeyboardDismissDisabled = false,
}: PopoverProps) => {
  return (
    <Popover
      placement={placement}
      showArrow={showArrow}
      color={color}
      size={size}
      radius={radius}
      backdrop={backdrop}
      offset={offset}
      containerPadding={containerPadding}
      triggerType={triggerType}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent> {contents}</PopoverContent>
    </Popover>
  )
}
