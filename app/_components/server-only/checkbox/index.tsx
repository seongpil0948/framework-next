import React from 'react';
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";

interface CheckboxProps {
  label?: string,
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  readOnly?: boolean;
  seleted?: boolean;
  successMsg?: string;
  errorMsg?: string;
  isInvalid?: boolean;
  validationState?: 'valid' | 'invalid';
}

export const CmCheckbox = ({
  label,
  required = false,
  size = 'md',
  color = 'primary',
  disabled = false,
  readOnly = false,
  seleted = false,
  isInvalid = false,
  validationState,
  successMsg = 'successMessage.',
  errorMsg = 'errorMessage.',
  ...props
}: CheckboxProps) => {
  return (
    <>
      <Checkbox
        size={size}
        color={color}
        isDisabled={disabled}
        isReadOnly={readOnly}
        defaultSelected={seleted}
        isInvalid={isInvalid === true || validationState === 'invalid'}
      >
        {label}
      </Checkbox >
      {isInvalid === false && validationState === 'valid' && <p>{successMsg}</p>}
      {(isInvalid === true || validationState === 'invalid') && <p>{errorMsg}</p>}
    </>
  );
};
