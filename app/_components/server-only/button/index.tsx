import React, { ForwardRefRenderFunction, forwardRef } from 'react'
import {
  Button,
  useButton,
  ButtonProps as BaseButtonProps,
} from '@nextui-org/button'

export interface ButtonProps extends BaseButtonProps {}

interface CmButtonProps extends ButtonProps {
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
  onFocus?: () => void
}

const CmButton: ForwardRefRenderFunction<HTMLButtonElement, CmButtonProps> =
  forwardRef(
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
        onClick,
        onFocus, // 추가
        ...props
      },
      ref?: React.ForwardedRef<HTMLButtonElement> | undefined,
    ) => {
      const { domRef, children, startContent, endContent, getButtonProps } =
        useButton({
          ref,
          ...props,
        })
      return (
        <Button
          ref={domRef}
          {...getButtonProps()}
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
          onFocus={onFocus} // 추가
        >
          {children}
        </Button>
      )
    },
  ) as ForwardRefRenderFunction<HTMLButtonElement, CmButtonProps>

CmButton.displayName = 'CmButton'

export default CmButton
