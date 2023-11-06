import React from 'react';
import { Textarea } from "@nextui-org/input";

interface TextareaProps {
  className?: string;
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined';
  color?: 'default' | 'primary' | 'secondary' |'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  minRows?: number,
  maxRows?: number,
  radius?: 'none' | 'sm' | 'md' | 'lg'| 'full';
  fullWidth?: boolean;
  label?: string;
  labelPlacement?: 'inside' | 'outside' | 'outside-left';
  required?: boolean;
  value: string;
  placeholder: string;
  disabled?: boolean;
  readOnly?: boolean;
  isError?: boolean;
  errorMsg?: string;
  showMaxLength?: boolean;
  maxLength?: number;
}

export const CmTextArea = ({
  className,
  variant = 'flat',
  color = 'default',
  size = 'md',
  minRows,
  maxRows,
  radius = 'md',
  fullWidth = false,
  label,
  labelPlacement= 'inside',
  required= false,
  value,
  maxLength,
  placeholder,
  disabled = false,
  readOnly = false,
  isError = false,
  errorMsg,
}: TextareaProps) => {

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
  );
};
