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
      options: [
        'solid',
        'bordered',
        'light',
        'flat',
        'faded',
        'shadow',
        'ghost',
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
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    radius: {
      options: ['sm', 'md', 'lg', 'full'],
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
