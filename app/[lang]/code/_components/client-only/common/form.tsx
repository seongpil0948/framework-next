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
            <Input label="등록정보" value={c.createDate} isDisabled />
          )}
          {c.updateDate && (
            <Input label="수정정보" value={c.updateDate} isDisabled />
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
      사용여부
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
      label="Value"
      placeholder="Enter Code value"
      variant="bordered"
      value={value}
      onValueChange={handleChange}
      isReadOnly={!props.isEditable}
      isClearable={props.isEditable}
      isInvalid={!length(value, 1)}
      errorMessage={!length(value, 1) ? '1자 이상 입력해주세요.' : undefined}
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
      // label={dict && dict["label"]["title"]}
      labelPlacement="inside"
      value={name}
      onValueChange={handleChange}
      // description={
      //   <p className="text-default-500 text-xs">
      //     {dict && dict["placeholder"]["title"]}
      //   </p>
      // }
      label="Name"
      placeholder="Enter code name"
      variant="bordered"
      isReadOnly={!props.isEditable}
      isClearable={props.isEditable}
      isInvalid={!length(name, 1)}
      errorMessage={!length(name, 1) ? '1자 이상 입력해주세요.' : undefined}
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
      // label={dict && dict["label"]["title"]}
      labelPlacement="inside"
      value={desc}
      onValueChange={handleChange}
      label="Code Description"
      placeholder="Enter code description"
      variant="bordered"
      isReadOnly={!props.isEditable}
      isInvalid={!length(desc, 1)}
      errorMessage={!length(desc, 1) ? '1자 이상 입력해주세요.' : undefined}
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
      // label={dict && dict["label"]["title"]}
      labelPlacement="inside"
      value={idx}
      onValueChange={setIdx}
      onBlur={handleBlur}
      label="Code Description"
      placeholder="Enter code description"
      variant="bordered"
      isReadOnly={!props.isEditable}
      isInvalid={isInvalid}
      errorMessage={isInvalid ? '1이상 입력해주세요.' : undefined}
    />
  )
}
