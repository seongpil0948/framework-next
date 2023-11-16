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
    validationState: {
      options: ['valid', 'invalid'],
      control: 'radio',
    },
  },
} satisfies Meta<typeof CmRadio>

export const Default = {
  args: {
    label: 'default',
    radioList: [
      { label: 'Cat', value: 'cat' },
      { label: 'Dog', value: 'dog' },
      { label: 'Elephant', value: 'elephant', disabled: true },
    ],
  },
}
