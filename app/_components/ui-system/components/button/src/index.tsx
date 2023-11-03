import React from 'react';
import { Button } from "@nextui-org/button";

enum variantList {
  solid = 'solid',
  bordered = 'bordered',
  light = 'light',
  flat = 'flat',
  faded = 'faded',
  shadow = 'shadow',
  ghost = 'ghost',
}
enum colorList {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
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

interface ButtonProps {
  children: string;
  className?: string;
  variant?: variantList;
  color?: colorList;
  size?: sizeList;
  radius?: radiusList;
  fullWidth?: boolean;
  startContent?: string;
  endContent?: string;
  isIconOnly?: boolean;
  disabled?: boolean;
}

export const Buttons = ({
  children,
  className,
  variant = variantList.solid,
  color = colorList.default,
  size = sizeList.md,
  radius = radiusList.md,
  fullWidth = false,
  startContent,
  endContent,
  isIconOnly = false,
  disabled = false,
  }: ButtonProps) => {
  return (
    <Button 
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
    >
      { children }
    </Button>
  );
};