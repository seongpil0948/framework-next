import { Meta } from '@storybook/react'
import { CmSwitch } from '.'

export default {
  title: 'Components/Switch',
  component: CmSwitch,
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
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
  },
} satisfies Meta<typeof CmSwitch>

export const Default = {
  args: {
    label: 'Default',
  },
}
export const IconOnly = {
  args: {
    iconOnly: true,
  },
}
