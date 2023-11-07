import React from 'react'
import { Input } from '@nextui-org/input'

interface InputProps {
  className?: string
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  fullWidth?: boolean
  label?: string
  labelPlacement?: 'inside' | 'outside' | 'outside-left'
  required?: boolean
  type?: 'text' | 'password'
  value: string
  maxLength?: number
  placeholder: string
  clearable?: boolean
  disabled?: boolean
  readOnly?: boolean
  isError?: boolean
  errorMsg?: string
}

export const CmInput = ({
  className,
  variant = 'flat',
  color = 'default',
  size = 'md',
  radius = 'md',
  fullWidth = false,
  label,
  labelPlacement = 'inside',
  required = false,
  type = 'text',
  value,
  maxLength,
  placeholder,
  clearable = false,
  disabled = false,
  readOnly = false,
  isError = false,
  errorMsg,
}: InputProps) => {
  return (
    <Input
      className={className}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      fullWidth={fullWidth}
      label={label}
      labelPlacement={labelPlacement}
      isRequired={required}
      type={type}
      defaultValue={value}
      maxLength={maxLength}
      placeholder={placeholder}
      isClearable={clearable}
      isDisabled={disabled}
      isReadOnly={readOnly}
      isInvalid={isError}
      errorMessage={errorMsg}
    />
  )
}
