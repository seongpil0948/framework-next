import React from 'react'
import { Tabs, Tab } from '@nextui-org/tabs'

interface TabProps {
  tabs: [
    {
      id: string
      ariaLabel?: string
      title: string
      contents: string
      disabled?: boolean
    },
  ]
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'bordered' | 'light' | 'underlined'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  fullWidth?: boolean
}

export const CmTab = ({
  tabs,
  size = 'md',
  variant = 'solid',
  color = 'default',
  radius = 'md',
  fullWidth,
}: TabProps) => {
  return (
    <Tabs
      size={size}
      variant={variant}
      color={color}
      radius={radius}
      fullWidth={fullWidth}
    >
      {tabs.map((tab) => (
        <Tab
          key={`tab-key-${tab.id}`}
          aria-label={tab.ariaLabel}
          title={tab.title}
          isDisabled={tab.disabled}
        >
          {tab.contents}
        </Tab>
      ))}
    </Tabs>
  )
}
