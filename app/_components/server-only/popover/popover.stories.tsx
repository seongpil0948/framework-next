import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { CmButton } from '.././button/'
import { CmPopover } from '.'

export default {
  title: 'Components/Popover',
  component: CmPopover,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/profile',
        query: {
          user: 'santa',
        },
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
    radius: {
      control: { type: 'select' },
    },
    backdrop: {
      control: { type: 'select' },
    },
    triggerType: {
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof CmPopover>

export const Default = {
  args: {
    trigger: (
      <CmButton color="danger" variant="solid">
        open
      </CmButton>
    ),
    contents: (
      <div className="px-1 py-2">
        <div className="text-small font-bold">Popover Content</div>
        <div className="text-tiny">This is the popover content</div>
      </div>
    ),
  },
}
