import React, { forwardRef } from 'react'
import { Button, ButtonProps } from '@nextui-org/button'

interface CmButtonProps extends ButtonProps {
  ref?: React.Ref<HTMLButtonElement> | undefined
  children?: string
  className?: string
  variant?: ButtonProps['variant']
  color?: ButtonProps['color']
  size?: ButtonProps['size']
  radius?: ButtonProps['radius']
  fullWidth?: boolean
  startContent?: string
  endContent?: string
  isIconOnly?: boolean
  disabled?: boolean
  onPress?: () => void
}

export const CmButton = forwardRef<HTMLButtonElement, CmButtonProps>(
  (
    {
      children,
      className,
      variant = 'solid',
      color = 'default',
      size = 'md',
      radius = 'md',
      fullWidth = false,
      isIconOnly = false,
      disabled = false,
      onPress,
      startContent,
      endContent,
      ...props
    }: CmButtonProps,
    ref?: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <Button
        ref={ref}
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
        {...props}
      >
        {children}
      </Button>
    )
  },
)

CmButton.displayName = 'CmButton'
