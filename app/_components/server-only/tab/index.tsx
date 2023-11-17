import React from 'react'
import { Tabs, TabsProps, Tab, TabItemProps } from '@nextui-org/tabs'

interface CmTabProps {
  tabs: [
    {
      id: string
      ariaLabel?: string
      title: TabItemProps['title']
      contents: TabItemProps['children']
      disabled?: TabItemProps['isDisabled']
    },
  ]
  size?: TabsProps['size']
  variant?: TabsProps['variant']
  color?: TabsProps['color']
  radius?: TabsProps['radius']
  fullWidth?: TabsProps['fullWidth']
}

export default function CmTab({
  tabs,
  size = 'md',
  variant = 'solid',
  color = 'default',
  radius = 'md',
  fullWidth,
}: CmTabProps) {
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
