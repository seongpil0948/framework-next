import React from 'react'
import { Input, InputProps } from '@nextui-org/input'

interface CmInputProps {
  className?: string
  variant?: InputProps['variant']
  color?: InputProps['color']
  size?: InputProps['size']
  radius?: InputProps['radius']
  fullWidth?: InputProps['fullWidth']
  label?: InputProps['label']
  labelPlacement?: InputProps['labelPlacement']
  required?: InputProps['required']
  type?: InputProps['type']
  value?: InputProps['value']
  maxLength?: InputProps['maxLength']
  placeholder?: InputProps['placeholder']
  clearable?: InputProps['isClearable']
  disabled?: InputProps['disabled']
  readOnly?: InputProps['readOnly']
  isError?: InputProps['isInvalid']
  errorMsg?: InputProps['errorMessage']
}

export default function CmInput({
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
}: CmInputProps) {
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
