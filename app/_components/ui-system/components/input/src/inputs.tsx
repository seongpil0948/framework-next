import React, { useState } from 'react';
import { Input, InputProps } from "@nextui-org/input";

interface InputProps {
  size?: string;
  variant?: string;
  fullWidth?: boolean;
  label?: string;
  labelPosition?: string;
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
  size = 'md',
  variant = 'flat',
  fullWidth = false,
  label,
  labelPosition='inside',
  required= false,
  value,
  type = 'text',
  placeholder,
  clearable = false,
  disabled = false,
  readOnly = false,
  isError = false,
  errorMsg,
  ...props
}: InputProps) => {
  return (
    <Input
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      label={label}
      labelPlacement={labelPosition}
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
