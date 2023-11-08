import React, { useState } from 'react'
import { Chip } from '@nextui-org/chip'
import { PressEvent } from 'react-aria'

interface ChipProps {
  content?: string
  size?: 'sm' | 'md' | 'lg'
  radius?: 'sm' | 'md' | 'lg' | 'full'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'dot'
  disabled?: boolean
  readOnly?: boolean
  onClose?: () => void
  isDelete?: boolean
}

export const CmChip = ({
  content,
  size = 'md',
  radius = 'full',
  color = 'default',
  variant = 'flat',
  disabled = false,
  readOnly = false,
  onClose,
  isDelete = false,
  ...props
}: ChipProps) => {
  return (
    <Chip
      size={size}
      radius={radius}
      color={color}
      variant={variant}
      isDisabled={disabled}
      onClose={isDelete ? () => console.log('close') : undefined}
    >
      {content}
    </Chip>
  )
}
