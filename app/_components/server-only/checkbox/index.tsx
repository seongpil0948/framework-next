'use client'
import React from 'react'
import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  CheckboxProps,
} from '@nextui-org/checkbox'

interface CmCheckboxProps {
  checkboxList?: Array<{
    label?: CheckboxProps['children']
    value?: string
    size?: CheckboxProps['size']
    color?: CheckboxProps['color']
    disabled?: CheckboxProps['isDisabled']
    readOnly?: CheckboxProps['isReadOnly']
  }>
  label?: CheckboxGroupProps['label']
  value?: string
  required?: CheckboxGroupProps['isRequired']
  size?: CheckboxGroupProps['size']
  color?: CheckboxGroupProps['color']
  disabled?: CheckboxGroupProps['isDisabled']
  readOnly?: CheckboxGroupProps['isReadOnly']
  successMsg?: string
  errorMsg?: CheckboxGroupProps['errorMessage']
  isInvalid?: CheckboxGroupProps['isInvalid']
  valid?: boolean
  orientation?: CheckboxGroupProps['orientation']
  selectedVaule?: boolean
  selected?: CheckboxGroupProps['value']
  onValueChange?: (isSelected: boolean) => void
}

export default function CmCheckbox({
  label,
  value,
  required = false,
  size = 'md',
  color = 'primary',
  disabled = false,
  readOnly = false,
  isInvalid = false,
  valid = false,
  successMsg = 'successMessage.',
  errorMsg = 'errorMessage.',
  checkboxList,
  orientation = 'vertical',
  selected,
  onValueChange,
  ...props
}: CmCheckboxProps) {
  const [selectedVaule, setSelected] = React.useState(selected)
  const noCheckboxGroup: CmCheckboxProps =
    !checkboxList || checkboxList.length === 0 ? { label, value } : {}
  return (
    <>
      <CheckboxGroup
        label={checkboxList && label}
        isRequired={required}
        size={size}
        color={valid === true ? 'success' : color}
        isDisabled={disabled}
        isReadOnly={readOnly}
        isInvalid={isInvalid === true && valid === false}
        errorMessage={
          isInvalid === true && valid === false && errorMsg
        }
        orientation={orientation}
        value={selectedVaule}
        onValueChange={setSelected}
      >
        {(checkboxList || [noCheckboxGroup]).map((checkbox) => (
          <Checkbox
            key={`checkbox-list-${checkbox.value}`}
            value={checkbox.value}
            size={checkbox.size}
            color={checkbox.color}
            isDisabled={checkbox.disabled}
            isReadOnly={checkbox.readOnly}
          >
            {checkbox.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
      {isInvalid === false && valid === true && (
        <p className="mt-2 text-xs text-green-500">{successMsg}</p>
      )}
    </>
  )
}
