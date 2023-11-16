import { Meta } from '@storybook/react'
import CmButton from '.'
import { HeadphonesIcon } from '@nextui-org/shared-icons'

export default {
  title: 'Components/Button',
  component: CmButton,
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
    variant: {
      control: { type: 'select' },
    },
    color: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    radius: {
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof CmButton>

export const Default = {
  args: {
    children: 'button',
  },
}

export const IconOnly = {
  args: {
    isIconOnly: true,
    children: <HeadphonesIcon className="w-5 h-5" />,
  },
}
