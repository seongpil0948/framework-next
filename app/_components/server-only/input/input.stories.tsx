import { Meta } from '@storybook/react'
import { CmInput } from '.'

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
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
    labelPlacement: {
      control: { type: 'select' },
    },
    type: {
      control: { type: 'select' },
    },
    radius: {
      control: { type: 'select' },
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
