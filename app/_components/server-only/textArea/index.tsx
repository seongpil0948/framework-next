import React from 'react'
import { Textarea, TextAreaProps } from '@nextui-org/input'

interface CmTextareaProps {
  className?: string
  variant?: TextAreaProps['variant']
  color?: TextAreaProps['color']
  size?: TextAreaProps['size']
  minRows?: TextAreaProps['minRows']
  maxRows?: TextAreaProps['maxRows']
  radius?: TextAreaProps['radius']
  fullWidth?: TextAreaProps['fullWidth']
  label?: TextAreaProps['label']
  labelPlacement?: TextAreaProps['labelPlacement']
  required?: TextAreaProps['required']
  value?: TextAreaProps['value']
  placeholder?: TextAreaProps['placeholder']
  disabled?: TextAreaProps['disabled']
  readOnly?: TextAreaProps['readOnly']
  isError?: TextAreaProps['isInvalid']
  errorMsg?: TextAreaProps['errorMessage']
  maxLength?: TextAreaProps['maxLength']
}

export default function CmTextArea({
  className,
  variant = 'flat',
  color = 'default',
  size = 'md',
  minRows = 3,
  maxRows = 8,
  radius = 'md',
  fullWidth = false,
  label,
  labelPlacement = 'inside',
  required = false,
  value,
  maxLength,
  placeholder,
  disabled = false,
  readOnly = false,
  isError = false,
  errorMsg,
}: CmTextareaProps) {
  return (
    <Textarea
      className={className}
      variant={variant}
      size={size}
      color={color}
      minRows={minRows}
      maxRows={maxRows}
      radius={radius}
      fullWidth={fullWidth}
      label={label}
      labelPlacement={labelPlacement}
      isRequired={required}
      defaultValue={value}
      maxLength={maxLength}
      placeholder={placeholder}
      isDisabled={disabled}
      isReadOnly={readOnly}
      isInvalid={isError}
      errorMessage={errorMsg}
    />
  )
}
