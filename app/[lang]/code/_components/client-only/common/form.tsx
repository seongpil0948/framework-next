'use client'

import { Input, Textarea } from '@nextui-org/input'
import { Checkbox } from '@nextui-org/checkbox'
import { length } from '@/app/_utils/validators'
import { useCodeDispatch, useCodeSelector } from '../../../store/store'
import { setField } from '../../../store/common-code-form'
import { useDictionary } from '@/app/_utils/hooks/locale'
import { parseNumber } from '@/app/_utils/common/comlib'
import { useState } from 'react'

export function CodeForm() {
  const mode = useCodeSelector((state) => state.commonForm.mode)
  const isEditable = mode === 'create' || mode === 'edit'
  const c = useCodeSelector((state) => state.commonForm.form)
  const dict = useDictionary()

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
            <Input
              label={dict && dict['common']['label']['createInformation']}
              value={c.createDate}
              isDisabled
            />
          )}
          {c.updateDate && (
            <Input
              label={dict && dict['common']['label']['updateInformation']}
              value={c.updateDate}
              isDisabled
            />
          )}
        </>
      )}
    </div>
  )
}

function InputUseYn(props: { isEditable: boolean }) {
  const value = useCodeSelector((state) => state.commonForm.form.useYn)
  const dispatch = useCodeDispatch()
  const dict = useDictionary()
  return (
    <Checkbox
      isSelected={value === 'Y'}
      onValueChange={(isSelected) => {
        dispatch(setField({ useYn: isSelected ? 'Y' : 'N' }))
      }}
      isReadOnly={!props.isEditable}
      isInvalid
    >
      {dict && dict['code']['label']['useStatus']}
    </Checkbox>
  )
}

function InputCodeValue(props: { isEditable: boolean }) {
  const value = useCodeSelector((state) => state.commonForm.form.codeValue)
  const dispatch = useCodeDispatch()
  const handleChange = (value: string) => {
    dispatch(setField({ codeValue: value }))
  }
  const dict = useDictionary()
  return (
    <Input
      isRequired
      labelPlacement="inside"
      label={dict && dict['code']['label']['value']}
      placeholder={dict && dict['code']['placeholder']['value']}
      variant="bordered"
      value={value}
      onValueChange={handleChange}
      isReadOnly={!props.isEditable}
      isClearable={props.isEditable}
      isInvalid={!length(value, 1)}
      errorMessage={
        !length(value, 1)
          ? `${dict && dict['error']['errorMessage']['code']['error']}`
          : undefined
      }
    />
  )
}

function InputCodeName(props: { isEditable: boolean }) {
  const name = useCodeSelector((state) => state.commonForm.form.codeName)
  const dispatch = useCodeDispatch()
  const handleChange = (value: string) => {
    dispatch(setField({ codeName: value }))
  }
  const dict = useDictionary()
  return (
    <Input
      isRequired
      labelPlacement="inside"
      value={name}
      onValueChange={handleChange}
      // description={
      //   <p className="text-default-500 text-xs">
      //     {dict && dict["placeholder"]["title"]}
      //   </p>
      // }
      label={dict && dict['code']['label']['name']}
      placeholder={dict && dict['code']['placeholder']['name']}
      variant="bordered"
      isReadOnly={!props.isEditable}
      isClearable={props.isEditable}
      isInvalid={!length(name, 1)}
      errorMessage={
        !length(name, 1)
          ? `${dict && dict['error']['errorMessage']['code']['error']}`
          : undefined
      }
    />
  )
}
function InputCodeDesc(props: { isEditable: boolean }) {
  const desc = useCodeSelector((state) => state.commonForm.form.codeDescription)
  const dispatch = useCodeDispatch()
  const handleChange = (value: string) => {
    dispatch(setField({ codeDescription: value }))
  }
  const dict = useDictionary()
  return (
    <Textarea
      isRequired
      labelPlacement="inside"
      value={desc}
      onValueChange={handleChange}
      label={dict && dict['code']['label']['description']}
      placeholder={dict && dict['code']['placeholder']['description']}
      variant="bordered"
      isReadOnly={!props.isEditable}
      isInvalid={!length(desc, 1)}
      errorMessage={
        !length(desc, 1)
          ? `${dict && dict['error']['errorMessage']['code']['error']}`
          : undefined
      }
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
  const dict = useDictionary()
  return (
    <Input
      isRequired
      labelPlacement="inside"
      value={idx}
      onValueChange={setIdx}
      onBlur={handleBlur}
      label={dict && dict['code']['label']['sequence']}
      placeholder={dict && dict['code']['placeholder']['sequence']}
      variant="bordered"
      isReadOnly={!props.isEditable}
      isInvalid={isInvalid}
      errorMessage={
        isInvalid
          ? `${dict && dict['error']['errorMessage']['code']['error']}`
          : undefined
      }
    />
  )
}
