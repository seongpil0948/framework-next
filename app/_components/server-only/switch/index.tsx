import React from 'react'
import { Switch, useSwitch, SwitchProps } from '@nextui-org/switch'
import { SelectSlots, SlotsToClasses } from '@nextui-org/theme'
import { clsx, type ClassValue } from 'clsx'
import { switchStyle } from './theme'
import { CartIcon } from '@nextui-org/shared-icons'
import { HeartFilledIcon } from '../icons'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

interface CmSwitchProps {
  iconOnly?: boolean
  className?: SwitchProps['className']
  label?: SwitchProps['children']
  value?: SwitchProps['value']
  color?: SwitchProps['color']
  size?: SwitchProps['size']
  selected?: SwitchProps['isSelected']
  disabled?: SwitchProps['isDisabled']
  startContent?: SwitchProps['startContent']
  endContent?: SwitchProps['endContent']
}

// IconOnly
const IconSwitch = (props: SwitchProps) => {
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
      <div {...getWrapperProps()}>
        {isSelected ? (
          <CartIcon className="h-5 w-5" />
        ) : (
          <HeartFilledIcon className="h-5 w-5" />
        )}
      </div>
    </Component>
  )
}

export const CmSwitch = ({
  className,
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
}: CmSwitchProps) => {
  const { wrapper } = switchStyle()
  const extendedClassNames = {
    wrapper: cn(wrapper()),
  } as SlotsToClasses<SelectSlots>

  return (
    <>
      {iconOnly ? (
        <IconSwitch
          classNames={extendedClassNames}
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
