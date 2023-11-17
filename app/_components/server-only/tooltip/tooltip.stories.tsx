import React from 'react'
import { Meta } from '@storybook/react'
import CmButton from '.././button/'
import CmTooltip from '.'

export default {
  title: 'Components/Tooltip',
  component: CmTooltip,
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
      options: [
        'top',
        'bottom',
        'right',
        'left',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
      control: { type: 'select' },
    },
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    radius: {
      options: ['sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
    },
    shadow: {
      options: ['none', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    delay: {
      control: { type: 'number' },
    },
    closeDelay: {
      control: { type: 'number' },
    },
    offset: {
      control: { type: 'number' },
    },
    containerPadding: {
      control: { type: 'number' },
    },
    crossOffset: {
      control: { type: 'number' },
    },
    showArrow: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof CmTooltip>

export const Default = {
  args: {
    trigger: (
      <CmButton color="success" variant="solid">
        hover me!
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
