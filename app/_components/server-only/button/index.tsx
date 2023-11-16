import React, {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'
import { Button, useButton } from '@nextui-org/button'
import { PropGetter } from '@nextui-org/system'

interface CmButtonProps {
  ref?: React.Ref<HTMLButtonElement>
  children: React.ReactNode
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
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  isIconOnly?: boolean
  disabled?: boolean
  onPress?: () => void
}

// ForwardRefExoticComponent에 defaultProps 추가
const CmButton: ForwardRefExoticComponent<
  Omit<CmButtonProps, 'ref'> & RefAttributes<HTMLButtonElement>
> = forwardRef(
  (
    {
      className,
      variant = 'solid',
      color = 'default',
      size = 'md',
      radius = 'md',
      fullWidth = false,
      isIconOnly = false,
      disabled = false,
      onPress,
      ...props
    },
    ref?: React.ForwardedRef<HTMLButtonElement> | undefined,
  ) => {
    const { domRef, children, startContent, endContent, getButtonProps } =
      useButton({
        ref,
        ...props,
      })

    const buttonProps = getButtonProps() as PropGetter<
      { className?: string },
      React.ButtonHTMLAttributes<HTMLButtonElement>
    >

    return (
      <Button
        ref={domRef}
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
        {...buttonProps}
      >
        {children}
      </Button>
    )
  },
)

// defaultProps 추가
CmButton.defaultProps = {
  variant: 'solid',
  color: 'default',
  size: 'md',
  radius: 'md',
  fullWidth: false,
  isIconOnly: false,
  disabled: false,
}

CmButton.displayName = 'CmButton'

export default CmButton
