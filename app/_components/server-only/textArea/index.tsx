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
  placeholder,
  disabled = false,
  readOnly = false,
  isError = false,
  errorMsg,
  maxLength,
  showMaxLength = false,
}: TextareaProps) => {
  const [value, setValue] = React.useState("");

  return (
    <>
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
        placeholder={placeholder}
        value={value}
        onValueChange={setValue}
        maxLength={maxLength}
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
