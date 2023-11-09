import React from 'react'
import { Button } from '@nextui-org/button'

interface ButtonProps {
  children: string
  className?: string
  variant?:
    | 'solid'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'faded'
    | 'shadow'
    | 'ghost'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  fullWidth?: boolean
  startContent?: string
  endContent?: string
  isIconOnly?: boolean
  disabled?: boolean
  onPress?: () => void
  onClick?: () => void
}

export const CmButton = ({
  children,
  className,
  variant = 'solid',
  color = 'default',
  size = 'md',
  radius = 'md',
  fullWidth = false,
  startContent,
  endContent,
  isIconOnly = false,
  disabled = false,
  onPress,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      className={className}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      fullWidth={fullWidth}
      startContent={startContent}
      endContent={endContent}
      isIconOnly={isIconOnly}
      isDisabled={disabled}
      onPress={onPress}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
