'use client'

import React, { forwardRef, useState } from 'react'
import { useInput, type InputProps } from '@nextui-org/input'
import { SearchIcon, CloseFilledIcon } from '../../server-only/icons'
import type { SlotsToClasses, InputSlots } from '@nextui-org/theme'
import { ChipList } from '../../server-only/list'

const styles: SlotsToClasses<InputSlots> = {
  label: 'text-black/50 dark:text-white/90',
  input: [
    'bg-transparent',
    'text-black/90 dark:text-white/90',
    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
  ],
  innerWrapper: 'bg-transparent',
  inputWrapper: [
    'shadow-xl',
    'bg-default-200/50',
    'dark:bg-default/60',
    'backdrop-blur-xl',
    'backdrop-saturate-200',
    'hover:bg-default-200/70',
    'focus-within:!bg-default-200/50',
    'dark:hover:bg-default/70',
    'dark:focus-within:!bg-default/60',
    '!cursor-text',
  ],
}
interface InputTagProps extends InputProps {
  initialValue?: string
  initialTags?: string[]
  onTagChange?: (tags: string[]) => void
  onSearch?: (tags: string[]) => void
}
const InputTag = forwardRef<any, InputTagProps>((props, ref) => {
  const [tags, setTags] = useState<string[]>(props.initialTags ?? [])
  const [value, setValue] = useState(props.initialValue ?? '')
  const handleValueTags = (val: string) => {
    const t = [...tags, ...val.split(' ').filter((x) => x)]
    setTags(t.reverse().slice(0, 5).reverse())
    props.onTagChange && props.onTagChange(tags)
    setValue('')
  }

  const handleSearch = () => {
    handleValueTags(value)
    props.onSearch && props.onSearch(tags)
  }

  const {
    Component,
    label,
    domRef,
    description,
    isClearable,
    startContent,
    endContent,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
  } = useInput({
    type: 'search',
    placeholder: 'Type to search...',
    ...props,
    ref,

    description: (
      <ChipList
        tags={tags}
        onClose={(item) => {
          setTags(tags.filter((tag) => item !== tag))
        }}
      />
    ),
    endContent: props.onSearch && (
      <SearchIcon
        onClick={handleSearch}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleSearch()
          }
        }}
        className="text-black/50 dark:text-white/90 text-slate-400 flex-shrink-0 cursor-pointer"
      />
    ),
    // custom styles
    classNames: {
      ...styles,
    },
    onValueChange: setValue,
    value,
    onKeyUp: (e) => {
      if (e.key === 'Spacebar' || e.key === ' ') {
        handleValueTags(value)
      }
      if (e.key === 'Enter') {
        handleSearch()
      }
    },
    onBlur: () => {
      handleValueTags(value)
    },
  })

  const labelContent = <label {...getLabelProps()}>{label}</label>

  const end = React.useMemo(() => {
    if (isClearable) {
      return (
        <span {...getClearButtonProps()}>
          {endContent || <CloseFilledIcon />}
        </span>
      )
    }

    return endContent
  }, [isClearable, endContent, getClearButtonProps])

  const innerWrapper = React.useMemo(() => {
    if (startContent || end) {
      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          <input {...getInputProps()} />
          {end}
        </div>
      )
    }

    return <input {...getInputProps()} />
  }, [startContent, end, getInputProps, getInnerWrapperProps])

  return (
    <Component {...getBaseProps()}>
      {shouldLabelBeOutside ? labelContent : null}
      <div
        {...getInputWrapperProps()}
        role="button"
        onClick={() => {
          domRef.current?.focus()
        }}
      >
        {shouldLabelBeInside ? labelContent : null}
        {innerWrapper}
      </div>
      {description && <div {...getDescriptionProps()}>{description}</div>}
      {errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
    </Component>
  )
})

InputTag.displayName = 'InputTag'

export default InputTag
