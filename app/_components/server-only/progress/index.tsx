import React from 'react'
import { Progress, ProgressProps } from '@nextui-org/progress'

interface CmProgressProps {
  color?: ProgressProps['color']
  size?: ProgressProps['size']
  radius?: ProgressProps['radius']
  value?: ProgressProps['value']
  maxValue?: ProgressProps['maxValue']
  ariaLabel: string
  label?: ProgressProps['label']
  disableAnimation?: ProgressProps['disableAnimation']
  isLoof?: ProgressProps['isIndeterminate']
}

export default function CmProgress({
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
}: CmProgressProps) {
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
