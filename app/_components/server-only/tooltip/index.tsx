import React from 'react'
import { Tooltip, TooltipProps } from '@nextui-org/tooltip'

interface CmTooltipProps {
  classNames?: TooltipProps['classNames']
  trigger: TooltipProps['children']
  contents: TooltipProps['content']
  showArrow?: TooltipProps['showArrow']
  placement?: TooltipProps['placement']
  color?: TooltipProps['color']
  size?: TooltipProps['size']
  radius?: TooltipProps['radius']
  shadow?: TooltipProps['shadow']
  delay?: TooltipProps['delay']
  closeDelay?: TooltipProps['closeDelay']
  offset?: TooltipProps['offset']
  containerPadding?: TooltipProps['containerPadding']
  crossOffset?: TooltipProps['crossOffset']
  motionProps?: TooltipProps['motionProps']
  isDisabled?: TooltipProps['isDisabled']
}
export default function CmTooltip({
  classNames,
  trigger,
  contents,
  showArrow = false,
  placement = 'right',
  color = 'default',
  size = 'md',
  radius = 'md',
  shadow = 'sm',
  delay = 500,
  closeDelay = 0,
  offset = 7,
  containerPadding = 12,
  crossOffset = 0,
  motionProps,
  isDisabled,
}: CmTooltipProps) {
  return (
    <Tooltip
      classNames={classNames}
      content={contents}
      showArrow={showArrow}
      placement={placement}
      color={color}
      size={size}
      radius={radius}
      shadow={shadow}
      delay={delay}
      closeDelay={closeDelay}
      offset={offset}
      containerPadding={containerPadding}
      crossOffset={crossOffset}
      motionProps={motionProps}
      isDisabled={isDisabled}
    >
      {trigger}
    </Tooltip>
  )
}
