import React from 'react'
import {
  Switch,
  useSwitch,
  SwitchProps as IconSwitchProps,
} from '@nextui-org/switch'

interface SwitchProps {
  iconOnly?: boolean
  label?: string
  value?: string
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  selected?: boolean
  disabled?: boolean
  startContent?: React.ReactNode
  endContent?: React.ReactNode
}

// IconOnly
const IconSwitch = (props: IconSwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props)

  return (
    <Component {...getBaseProps()}>
      <input className="hidden" {...getInputProps()} />
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: [
            'flex items-center justify-center',
            'w-8 h-8',
            'rounded-lg bg-default-100 hover:bg-default-200',
          ],
        })}
      >
        {isSelected ? 'y' : 'n'}
      </div>
    </Component>
  )
}

export const CmSwitch = ({
  iconOnly = false,
  label,
  value,
  color = 'primary',
  size = 'md',
  selected,
  disabled = false,
  startContent,
  endContent,
  ...props
}: SwitchProps) => {
  return (
    <>
      {iconOnly ? (
        <IconSwitch
          color={color}
          isSelected={selected}
          isDisabled={disabled}
          value={value}
        />
      ) : (
        <Switch
          color={color}
          size={size}
          isSelected={selected}
          isDisabled={disabled}
          value={value}
          startContent={startContent}
          endContent={endContent}
        >
          {label}
        </Switch>
      )}
    </>
  )
}
