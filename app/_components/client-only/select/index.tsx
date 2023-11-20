'use client'

import { useState } from 'react'
import { Select, SelectItem, SelectProps } from '@nextui-org/select'
import { SelectSlots, SlotsToClasses } from '@nextui-org/theme'
import { CmChip } from '../../server-only/chip'
import { clsx, type ClassValue } from 'clsx'
import CmButton from '../../server-only/button'
import { select } from './theme'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

interface SelectItem {
  item?: string
  value?: string
  label?: string
  startContent?: React.ReactNode
}

interface ICmSelectProps extends Omit<SelectProps, 'children'> {
  // className?: string
  dropdownItem: SelectItem[]
  // selectionMode?: 'single' | 'multiple'
  triggerType?: 'input' | 'button'
  // selectedKeys?: SelectProps['selectedKeys']
  // disabledKeys?: SelectProps['disabledKeys']
  // defaultSelectedKeys?: SelectProps['defaultSelectedKeys']
  // size?: 'sm' | 'md' | 'lg'
  // placeholder?: string
  // label?: string
  // labelPlacement?: 'inside' | 'outside' | 'outside-left'
  // required?: boolean
  // disabled?: boolean
  readOnly?: boolean
  // selectorIcon?: React.ReactNode
  // isInvalid?: boolean
  validationState?: 'valid' | 'invalid'
  errorMsg?: string
  successMsg?: string
  useChip?: boolean
  // isOpen?: boolean
  // onOpenChange?: (isOpen: boolean) => void
}

const CmSelect = ({
  className,
  dropdownItem,
  triggerType = 'input',
  selectionMode = 'single',
  selectedKeys,
  disabledKeys,
  defaultSelectedKeys,
  size = 'md',
  placeholder = '선택해주세요.',
  label,
  labelPlacement = 'outside',
  required = false,
  disabled = false,
  readOnly = false,
  selectorIcon,
  isInvalid = false,
  validationState,
  errorMsg = 'errorMessage',
  successMsg = 'successMessage',
  useChip = false,
  ...props
}: ICmSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { base } = select()
  const extendedClassNames = {
    base: cn(base()),
  } as SlotsToClasses<SelectSlots>
  const dropdownBtn = () => (
    <CmButton onPress={() => setIsOpen(!isOpen)}>
      {isOpen ? 'Close' : 'Open'}
    </CmButton>
  )

  return (
    <>
      <div>
        <Select
          classNames={extendedClassNames}
          isOpen={isOpen}
          onOpenChange={(open) => open !== isOpen && setIsOpen(open)}
          items={dropdownItem}
          selectionMode={selectionMode}
          disabledKeys={disabledKeys}
          selectedKeys={selectedKeys}
          defaultSelectedKeys={defaultSelectedKeys}
          size={size}
          placeholder={placeholder}
          label={label}
          labelPlacement={labelPlacement}
          isRequired={required}
          isDisabled={disabled}
          selectorIcon={selectorIcon}
          isInvalid={isInvalid === true || validationState === 'invalid'}
          errorMessage={
            (isInvalid === true || validationState === 'invalid') && errorMsg
          }
          renderValue={
            useChip
              ? (items) => {
                  return (
                    <div className="flex gap-2">
                      {items.map((item: any) => (
                        <CmChip key={item.value} content={item.data.label} />
                      ))}
                    </div>
                  )
                }
              : undefined
          }
        >
          {(item) => (
            <SelectItem
              key={`dropdown-item-key-${item.value}`}
              textValue={item.value}
              startContent={item.startContent}
            >
              {item.label}
            </SelectItem>
          )}
        </Select>
        {triggerType === 'button' && dropdownBtn()}
      </div>
      {validationState === 'valid' && <p>{successMsg}</p>}
    </>
  )
}

export default CmSelect
