import { Meta } from '@storybook/react'
import CmTextArea from '.'

export default {
  title: 'Components/TextArea',
  component: CmTextArea,
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
      options: ['flat', 'bordered', 'faded', 'underlined'],
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
    labelPlacement: {
      options: ['inside', 'outside', 'outside-left'],
      control: { type: 'select' },
    },
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    isError: {
      control: { type: 'boolean' },
    },
    minRows: {
      control: { type: 'number' },
    },
    maxRows: {
      control: { type: 'number' },
    },
    errorMsg: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof CmTextArea>

export const Default = {
  args: {
    label: 'default',
    value: '',
    placeholder: '입력하세요',
  },
}
