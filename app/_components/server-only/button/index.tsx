import React, { forwardRef } from 'react'
import { Button, ButtonProps } from '@nextui-org/button'

interface CmButtonProps extends ButtonProps {
  ref?: ButtonProps['ref']
  className?: ButtonProps['className']
  children?: ButtonProps['children']
  variant?: ButtonProps['variant']
  color?: ButtonProps['color']
  size?: ButtonProps['size']
  radius?: ButtonProps['radius']
  fullWidth?: ButtonProps['fullWidth']
  startContent?: ButtonProps['startContent']
  endContent?: ButtonProps['endContent']
  isIconOnly?: ButtonProps['isIconOnly']
  disabled?: ButtonProps['disabled']
  onPress?: ButtonProps['onPress']
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
      startContent,
      endContent,
      onPress,
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

export default CmButton
