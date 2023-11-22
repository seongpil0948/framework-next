'use client'

import { useState } from 'react'
import {
  Select,
  SelectItem,
  SelectProps,
  SelectItemProps,
} from '@nextui-org/select'
import { SelectSlots, SlotsToClasses } from '@nextui-org/theme'
import CmChip from '../../server-only/chip'
import { clsx, type ClassValue } from 'clsx'
import CmButton from '../../server-only/button'
import { select } from './theme'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

interface ICmSelectProps extends Omit<SelectProps, 'children'> {
  selectItem: Array<{
    id: SelectItemProps['key']
    title: SelectItemProps['title']
    value?: SelectItemProps['textValue']
    startContent?: SelectItemProps['startContent']
  }>
  className?: SelectProps['className']
  selectionMode?: SelectProps['selectionMode']
  triggerType?: 'input' | 'button'
  disabledKeys?: SelectProps['disabledKeys']
  selectedKeys?: SelectProps['selectedKeys']
  size?: SelectProps['size']
  placeholder?: SelectProps['placeholder']
  label?: SelectProps['label']
  labelPlacement?: SelectProps['labelPlacement']
  required?: SelectProps['isRequired']
  disabled?: SelectProps['isDisabled']
  readOnly?: boolean
  selectorIcon?: SelectProps['selectorIcon']
  isInvalid?: SelectProps['isInvalid']
  errorMsg?: SelectProps['errorMessage']
  valid?: boolean
  successMsg?: string
  useChip?: boolean
  isOpen?: SelectProps['isOpen']
  onOpenChange?: SelectProps['onOpenChange']
}

export default function CmSelect({
  className,
  selectItem,
  triggerType = 'input',
  selectionMode = 'single',
  disabledKeys,
  selectedKeys,
  size = 'md',
  placeholder = '선택해주세요.',
  label,
  labelPlacement = 'outside',
  required = false,
  disabled = false,
  readOnly = false,
  selectorIcon,
  isInvalid = false,
  valid = false,
  errorMsg = 'errorMessage',
  successMsg = 'successMessage',
  useChip = false,
  ...props
}: ICmSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { base, innerWrapper, value } = select({ size })
  const extendedClassNames = {
    base: cn(`${readOnly ? 'pointer-events-none' : base()}`),
    innerWrapper: cn(innerWrapper()),
    value: cn(value()),
  } as SlotsToClasses<SelectSlots>

  const selectBtn = () => (
    <CmButton
      onPress={() => setIsOpen(!isOpen)}
      className={`${readOnly ? 'pointer-events-none' : ''}, ${
        disabled ? 'opacity-disabled' : ''
      }`}
    >
      {isOpen ? 'Close' : 'Open'}
    </CmButton>
  )

  return (
    <div className={select.base}>
      <Select
        classNames={extendedClassNames}
        isOpen={isOpen}
        onOpenChange={(open) => open !== isOpen && setIsOpen(open)}
        items={selectItem}
        selectionMode={selectionMode}
        disabledKeys={disabledKeys}
        defaultSelectedKeys={selectedKeys}
        size={size}
        placeholder={placeholder}
        label={label}
        labelPlacement={labelPlacement}
        isRequired={required}
        isDisabled={disabled}
        selectorIcon={selectorIcon}
        isInvalid={isInvalid === true && valid === false}
        errorMessage={isInvalid === true && valid === false && errorMsg}
        renderValue={
          useChip
            ? (chips) => {
                return (
                  <div>
                    {chips.map((chip: any) => (
                      <CmChip key={chip.key}>
                        {chip.data.startContent && (
                          <span>{chip.data.startContent}</span>
                        )}
                        <span>{chip.data.title}</span>
                      </CmChip>
                    ))}
                  </div>
                )
              }
            : (items) => {
                return (
                  <div>
                    {items.map((item: any) => (
                      <div key={`select-item-key-${item.id}`}>
                        {item.data.startContent && (
                          <span>{item.data.startContent}</span>
                        )}
                        <span className="!inline-block">{item.data.title}</span>
                      </div>
                    ))}
                  </div>
                )
              }
        }
      >
        {(item) => (
          <SelectItem
            key={`select-item-key-${item.id}`}
            title={item.title}
            id={item.value}
            startContent={item.startContent}
          />
        )}
      </Select>
      {triggerType === 'button' && selectBtn()}
    </div>
  )
}
