import React from 'react';
import { Input } from "@nextui-org/input";

interface InputProps {
  className?: string;
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg'| 'full';
  fullWidth?: boolean;
  label?: string;
  labelPlacement?: 'inside' | 'outside' | 'outside-left';
  required?: boolean;
  value: string;
  type?: string;
  placeholder: string;
  clearable?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  isError?: boolean;
  errorMsg?: string
}

export const Inputs = ({
  className,
  variant = 'flat',
  size = 'md',
  radius = 'md',
  fullWidth = false,
  label,
  labelPlacement= 'inside',
  required= false,
  value,
  type = 'text',
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
      size={size}
      radius={radius}
      fullWidth={fullWidth}
      label={label}
      labelPlacement={labelPlacement}
      isRequired={required}
      defaultValue={value}
      type={type}
      placeholder={placeholder}
      isClearable={clearable}
      isDisabled={disabled}
      isReadOnly={readOnly}
      isInvalid={isError}
      errorMessage={errorMsg}
    />
  );
};
