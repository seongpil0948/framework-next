import React from 'react'
import {
  RadioGroup,
  Radio,
  RadioGroupProps,
  RadioProps,
} from '@nextui-org/radio'

interface CmRadioGroupProps {
  radioList: [
    {
      label: RadioProps['children']
      value: RadioProps['value']
      disabled?: RadioProps['isDisabled']
    },
  ]
  label?: RadioGroupProps['label']
  required?: RadioGroupProps['isRequired']
  size?: RadioGroupProps['size']
  color?: RadioGroupProps['color']
  disabled?: RadioGroupProps['isDisabled']
  readOnly?: RadioGroupProps['isReadOnly']
  successMsg?: string
  errorMsg?: RadioGroupProps['errorMessage']
  isInvalid?: RadioGroupProps['isInvalid']
  valid?: boolean
  orientation?: RadioGroupProps['orientation']
}

export default function CmRadio({
  radioList,
  label,
  required = false,
  size = 'md',
  color = 'primary',
  disabled = false,
  readOnly = false,
  successMsg = 'successMessage.',
  errorMsg = 'errorMessage.',
  isInvalid = false,
  valid = false,
  orientation = 'vertical',
  ...props
}: CmRadioGroupProps) {
  return (
    <>
      <RadioGroup
        label={label}
        isRequired={required}
        size={size}
        color={valid === true ? 'success' : color}
        isDisabled={disabled}
        isReadOnly={readOnly}
        isInvalid={isInvalid && valid === false}
        errorMessage={
          isInvalid === true && valid === false && errorMsg
        }
        orientation={orientation}
      >
        {radioList.map((radio) => (
          <Radio
            key={`radio-list-${radio.value}`}
            value={radio.value}
            isDisabled={radio.disabled}
          >
            {radio.label}
          </Radio>
        ))}
      </RadioGroup>
      {isInvalid === false && valid === true && (
        <p className="mt-2 text-xs text-green-500">{successMsg}</p>
      )}
    </>
  )
}
