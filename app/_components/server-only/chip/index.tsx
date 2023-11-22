import React from 'react'
import { Chip, ChipProps } from '@nextui-org/chip'
import { PressEvent } from 'react-aria'

interface CmChipProps {
  className?: ChipProps['className']
  children: ChipProps['children']
  size?: ChipProps['size']
  radius?: ChipProps['radius']
  color?: ChipProps['color']
  variant?: ChipProps['variant']
  disabled?: ChipProps['isDisabled']
  readOnly?: boolean
  isDelete?: boolean
  onClose?: () => void
}

export default function CmChip({
  children,
  className,
  size = 'md',
  radius = 'full',
  color = 'default',
  variant = 'flat',
  disabled = false,
  readOnly = false,
  isDelete = false,
  onClose,
  ...props
}: CmChipProps) {
  return (
    <Chip
      className={className}
      size={size}
      radius={radius}
      color={color}
      variant={variant}
      isDisabled={disabled}
      onClose={isDelete ? () => console.log('close') : undefined}
    >
      {children}
    </Chip>
  )
}
