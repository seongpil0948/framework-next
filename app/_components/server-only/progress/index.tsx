import React from 'react'
import { Progress } from '@nextui-org/progress'

interface ProgressProps {
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  value?: number
  maxValue?: number
  ariaLabel: string
  label?: string
  disableAnimation?: boolean
  isLoof?: boolean
}

export const CmProgress = ({
  color = 'primary',
  radius = 'md',
  size = 'md',
  value,
  maxValue,
  ariaLabel = 'Loading...',
  label,
  disableAnimation = false,
  isLoof = false,
  ...props
}: ProgressProps) => {
  return (
    <Progress
      color={color}
      radius={radius}
      size={size}
      aria-label={ariaLabel}
      value={value}
      maxValue={maxValue}
      label={label}
      disableAnimation={disableAnimation}
      isIndeterminate={isLoof}
    />
  )
}
