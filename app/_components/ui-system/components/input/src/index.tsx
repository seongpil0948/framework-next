import React from 'react';
import { Input } from "@nextui-org/input";

enum variantList {
  flat = 'flat',
  bordered = 'bordered',
  faded = 'faded',
  underlined = 'underlined',
}
enum sizeList {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}
enum radiusList {
  none = 'none',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  full = 'full',
}
enum labelPlacementList {
  inside = 'inside',
  outside = 'outside',
  outsideLeft = 'outside-left',
}

interface InputProps {
  className?: string;
  variant?: variantList;
  size?: sizeList;
  radius?: radiusList;
  fullWidth?: boolean;
  label?: string;
  labelPlacement?: labelPlacementList;
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
  variant = variantList.flat,
  size = sizeList.md,
  radius = radiusList.md,
  fullWidth = false,
  label,
  labelPlacement= labelPlacementList.inside,
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
