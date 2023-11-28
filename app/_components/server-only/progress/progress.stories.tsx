import { Meta } from '@storybook/react'
import CmProgress from '.'

export default {
  title: 'Components/Progress',
  component: CmProgress,
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
    color: {
      option: [
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
      control: 'select',
    },
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: 'select',
    },
    disableAnimation: {
      control: 'boolean',
    },
    isLoof: {
      control: 'boolean',
    },
    maxValue: {
      control: 'number',
    },
  },
} satisfies Meta<typeof CmProgress>

export const Default = {
  args: {
    label: 'default',
    value: 77,
  },
}
