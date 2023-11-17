import React from 'react'
import {
  Popover,
  PopoverProps,
  PopoverTrigger,
  PopoverTriggerProps,
  PopoverContent,
  PopoverContentProps,
} from '@nextui-org/popover'

interface CmPopoverProps {
  trigger: PopoverTriggerProps['children']
  contents: PopoverContentProps['children']
  placement?: PopoverProps['placement']
  showArrow?: PopoverProps['showArrow']
  color?: PopoverProps['color']
  size?: PopoverProps['size']
  radius?: PopoverProps['radius']
  backdrop?: PopoverProps['backdrop']
  shadow?: PopoverProps['shadow']
  offset?: PopoverProps['offset']
  containerPadding?: PopoverProps['containerPadding']
  triggerType?: PopoverProps['triggerType']
  isKeyboardDismissDisabled?: PopoverProps['isKeyboardDismissDisabled']
}
export default function CmPopover({
  trigger,
  contents,
  placement = 'right',
  showArrow = false,
  color = 'default',
  size = 'md',
  radius = 'md',
  backdrop = 'transparent',
  shadow = 'lg',
  offset = 7,
  containerPadding = 12,
  triggerType = 'dialog',
  isKeyboardDismissDisabled = false,
}: CmPopoverProps) {
  return (
    <Popover
      placement={placement}
      showArrow={showArrow}
      color={color}
      size={size}
      radius={radius}
      backdrop={backdrop}
      shadow={shadow}
      offset={offset}
      containerPadding={containerPadding}
      triggerType={triggerType}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>{contents}</PopoverContent>
    </Popover>
  )
}
