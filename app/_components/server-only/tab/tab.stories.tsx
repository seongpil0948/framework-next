import { Meta } from '@storybook/react'
import CmTab from '.'

export default {
  title: 'Components/Tab',
  component: CmTab,
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
    size: {
      options: ['solid', 'bordered', 'light', 'underlined'],
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
      control: { type: 'select' },
    },
    variant: {
      options: ['solid', 'bordered', 'light', 'underlined'],
      control: { type: 'select' },
    },
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof CmTab>

export const Default = {
  args: {
    tabs: [
      {
        id: 1,
        ariaLabel: 'tab1',
        title: 'tab1',
        contents: 'contents',
      },
      {
        id: 2,
        ariaLabel: 'tab2',
        title: 'tab2',
        contents: 'contents2',
      },
      {
        id: 3,
        ariaLabel: 'disabled',
        title: 'is disabled',
        contents: '',
        disabled: true,
      },
    ],
  },
}
