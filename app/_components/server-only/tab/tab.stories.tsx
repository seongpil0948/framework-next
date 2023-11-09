import { Meta } from '@storybook/react'
import { CmTab } from '.'

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
      control: { type: 'select' },
    },
    variant: {
      control: { type: 'select' },
    },
    radius: {
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
