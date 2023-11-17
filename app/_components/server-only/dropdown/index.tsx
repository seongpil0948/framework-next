"use client"

import React, { useState } from 'react'
import { Select, SelectItem, SelectProps } from '@nextui-org/select'
import { CmChip } from '../chip'
import CmButton from '../button'
import { dropdown } from '@/app/_components/server-only/primitives'

interface DropdownItem {
  item?: string
  value?: string
  label?: string
  startContent?: React.ReactNode
}
interface DropdownProps {
  dropdownItem: DropdownItem[]
  selectionMode?: 'single' | 'multiple'
  triggerType?: 'input' | 'button'
  selectedKeys?: SelectProps['selectedKeys']
  disabledKeys?: SelectProps['disabledKeys']
  defaultSelectedKeys?: SelectProps['defaultSelectedKeys']
  size?: 'sm' | 'md' | 'lg'
  placeholder?: string
  label?: string
  labelPlacement?: 'inside' | 'outside' | 'outside-left'
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  selectorIcon?: React.ReactNode
  isInvalid?: boolean
  validationState?: 'valid' | 'invalid'
  errorMsg?: string
  successMsg?: string
  useChip?: boolean
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export const CmDropdown = ({
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
}: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownBtn = () => (
    <CmButton onPress={() => setIsOpen(!isOpen)}>
      {isOpen ? 'Close' : 'Open'}
    </CmButton>
  )

  return (
    <>
      <div className={dropdown()}>
        <Select
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
