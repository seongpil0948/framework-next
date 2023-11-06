import React, { useState } from 'react';
import { Chip } from "@nextui-org/chip";
import { PressEvent } from 'react-aria';

interface ChipProps {
  content?: string,
  size?: 'sm' | 'md' | 'lg';
  radius?: 'sm' | 'md' | 'lg' | 'full';
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'dot';
  disabled?: boolean;
  readOnly?: boolean;
  onClose?: Function;
}

export const CmChip = ({
  content,
  size = 'md',
  radius = 'full',
  color = 'default',
  variant = 'flat',
  disabled = false,
  readOnly = false,
  onClose,
  ...props
}: ChipProps) => {
  return (
    <Chip
      size={size}
      radius={radius}
      color={color}
      variant={variant}
      isDisabled={disabled}
      classNames={{ base: { '': readOnly }, content: { '': readOnly } }}
      onClose={() => console.log('close')}
    >
      {content}
    </Chip >
  );
};
