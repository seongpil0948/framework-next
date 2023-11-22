import { Meta } from '@storybook/react'
import CmRadio from '.'

export default {
  title: 'Components/Radio',
  component: CmRadio,
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
    required: {
      control: 'boolean',
    },
    size: {
      options: ['sm', 'md', 'lg'],
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
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    errorMsg: {
      control: 'text',
    },
    isInvalid: {
      control: 'boolean',
    },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: 'radio',
    },
  },
} satisfies Meta<typeof CmRadio>

export const Default = {
  args: {
    label: 'default',
    selected: ['selected'],
    radioList: [
      { label: 'default', value: 'default' },
      { label: 'selected', value: 'selected' },
      { label: 'disabled', value: 'disabled', disabled: true },
    ],
  },
}
