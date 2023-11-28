import { Meta } from '@storybook/react'
import CmChip from '.'

export default {
  title: 'Components/Chip',
  component: CmChip,
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
    radius: {
      options: ['sm', 'md', 'lg', 'full'],
      control: 'select',
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
    variant: {
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'dot'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof CmChip>

export const Default = {
  args: {
    content: 'Default',
  },
}
