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
  errorMsg?: string;
  showMaxLength?: boolean;
  maxLength?: number;
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
  type = 'text',
  placeholder,
  clearable = false,
  disabled = false,
  readOnly = false,
  isError = false,
  errorMsg,
  showMaxLength = false,
  maxLength,
}: InputProps) => {
  const [value, setValue] = React.useState("");

  return (
    <>
      <Input
        className={className}
        variant={variant}
        size={size}
        radius={radius}
        fullWidth={fullWidth}
        label={label}
        labelPlacement={labelPlacement}
        isRequired={required}
        value={value}
        onValueChange={setValue}
        maxLength={maxLength}
        type={type}
        placeholder={placeholder}
        isClearable={clearable}
        isDisabled={disabled}
        isReadOnly={readOnly}
        isInvalid={isError}
        errorMessage={errorMsg}
      />
      {
        showMaxLength
        ? <p className="text-right text-default-500 text-small">{value.length} / {maxLength} </p>
        : null
      }
    </>
  );
};
