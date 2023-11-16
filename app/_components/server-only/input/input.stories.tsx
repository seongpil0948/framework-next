import { Meta } from '@storybook/react'
import CmInput from '.'

export default {
  title: 'Components/Input',
  component: CmInput,
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
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    labelPlacement: {
      options: ['inside', 'outside', 'outside-left'],
      control: { type: 'select' },
    },
    required: {
      control: { type: 'boolean' },
    },
    type: {
      control: { type: 'text' },
    },
    clearable: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    maxLength: {
      control: { type: 'number' },
    },
    isError: {
      control: { type: 'boolean' },
    },
    errorMsg: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof CmInput>

export const Default = {
  args: {
    label: 'default',
    value: '',
    placeholder: '입력하세요',
  },
}

export const Disabled = {
  args: {
    label: 'disabled',
    value: '',
    placeholder: '입력하세요',
    disabled: true,
  },
}

export const ReadOnly = {
  args: {
    label: 'disabled',
    value: '',
    placeholder: '입력하세요',
    readOnly: true,
  },
}

export const Clearable = {
  args: {
    label: 'clearable',
    value: '',
    placeholder: '입력하세요',
    clearable: true,
  },
}

export const NoLabel = {
  args: {
    value: '',
    placeholder: '입력하세요',
  },
}

export const ValidateError = {
  args: {
    label: 'is error',
    value: '잘못된 값입니다.',
    placeholder: '입력하세요',
    isError: true,
    errorMessage: '다시 입력해주세요',
  },
}
