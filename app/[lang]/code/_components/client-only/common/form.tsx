'use client'

import { Input, Textarea } from '@nextui-org/input'
import { Checkbox } from '@nextui-org/checkbox'
import { length } from '@/app/_utils/validators'
import { useCodeDispatch, useCodeSelector } from '../../../store/store'
import { setField } from '../../../store/common-code-form'
import { useDict } from '@/app/_utils/hooks/locale'
import { parseNumber } from '@/app/_utils/common/comlib'
import { useState } from 'react'

export function CodeForm() {
  const mode = useCodeSelector((state) => state.commonForm.mode)
  const isEditable = mode === 'create' || mode === 'edit'
  const c = useCodeSelector((state) => state.commonForm.form)
  const createInformation = useDict(['common', 'label', 'createInformation'])
  const updateInformation = useDict(['common', 'label', 'updateInformation'])

  return (
    <div>
      <InputCodeName isEditable={isEditable} />
      <InputCodeValue isEditable={isEditable} />
      <InputCodeDesc isEditable={isEditable} />
      <InputCodeIdx isEditable={isEditable} />
      <InputUseYn isEditable={isEditable} />
      {!isEditable && (
        <>
          {c.createDate && (
            <Input label={createInformation} value={c.createDate} isDisabled />
          )}
          {c.updateDate && (
            <Input label={updateInformation} value={c.updateDate} isDisabled />
          )}
        </>
      )}
    </div>
  )
}

function InputUseYn(props: { isEditable: boolean }) {
  const value = useCodeSelector((state) => state.commonForm.form.useYn)
  const dispatch = useCodeDispatch()
  const text = useDict(['code', 'label', 'useStatus'])
  return (
    <Checkbox
      isSelected={value === 'Y'}
      onValueChange={(isSelected) => {
        dispatch(setField({ useYn: isSelected ? 'Y' : 'N' }))
      }}
      isReadOnly={!props.isEditable}
      isInvalid
    >
      {text}
    </Checkbox>
  )
}

function InputCodeValue(props: { isEditable: boolean }) {
  const value = useCodeSelector((state) => state.commonForm.form.codeValue)
  const dispatch = useCodeDispatch()
  const handleChange = (value: string) => {
    dispatch(setField({ codeValue: value }))
  }
  const label = useDict(['code', 'label', 'value'])
  const placeholder = useDict(['code', 'placeholder', 'value'])
  const errorMessage = useDict(['error', 'errorMessage', 'code'])
  return (
    <Input
      isRequired
      labelPlacement="inside"
      label={label}
      placeholder={placeholder}
      variant="bordered"
      value={value}
      onValueChange={handleChange}
      isReadOnly={!props.isEditable}
      isClearable={props.isEditable}
      isInvalid={!length(value, 1)}
      errorMessage={!length(value, 1) ? errorMessage : undefined}
    />
  )
}

function InputCodeName(props: { isEditable: boolean }) {
  const name = useCodeSelector((state) => state.commonForm.form.codeName)
  const dispatch = useCodeDispatch()
  const handleChange = (value: string) => {
    dispatch(setField({ codeName: value }))
  }
  const label = useDict(['code', 'label', 'name'])
  const placeholder = useDict(['code', 'placeholder', 'name'])
  const errorMessage = useDict(['error', 'errorMessage', 'code'])
  return (
    <Input
      isRequired
      labelPlacement="inside"
      value={name}
      onValueChange={handleChange}
      label={label}
      placeholder={placeholder}
      variant="bordered"
      isReadOnly={!props.isEditable}
      isClearable={props.isEditable}
      isInvalid={!length(name, 1)}
      errorMessage={!length(name, 1) ? errorMessage : undefined}
    />
  )
}
function InputCodeDesc(props: { isEditable: boolean }) {
  const desc = useCodeSelector((state) => state.commonForm.form.codeDescription)
  const dispatch = useCodeDispatch()
  const handleChange = (value: string) => {
    dispatch(setField({ codeDescription: value }))
  }
  const label = useDict(['code', 'label', 'description'])
  const placeholder = useDict(['code', 'placeholder', 'description'])
  const errorMessage = useDict(['error', 'errorMessage', 'code'])
  return (
    <Textarea
      isRequired
      labelPlacement="inside"
      value={desc}
      onValueChange={handleChange}
      label={label}
      placeholder={placeholder}
      variant="bordered"
      isReadOnly={!props.isEditable}
      isInvalid={!length(desc, 1)}
      errorMessage={!length(desc, 1) ? errorMessage : undefined}
    />
  )
}
function InputCodeIdx(props: { isEditable: boolean }) {
  const codeIndex = useCodeSelector((state) => state.commonForm.form.codeIndex)
  const [idx, setIdx] = useState(String(codeIndex))
  const isInvalid = parseNumber(idx) < 0 || codeIndex < 0

  const dispatch = useCodeDispatch()
  const handleBlur = () => {
    dispatch(setField({ codeIndex: parseNumber(idx, 0) }))
  }
  const label = useDict(['code', 'label', 'sequence'])
  const placeholder = useDict(['code', 'placeholder', 'sequence'])
  const errorMessage = useDict(['error', 'errorMessage', 'code'])
  return (
    <Input
      isRequired
      labelPlacement="inside"
      value={idx}
      onValueChange={setIdx}
      onBlur={handleBlur}
      label={label}
      placeholder={placeholder}
      variant="bordered"
      isReadOnly={!props.isEditable}
      isInvalid={isInvalid}
      errorMessage={isInvalid ? errorMessage : undefined}
    />
  )
}
