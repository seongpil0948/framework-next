import { Meta } from '@storybook/react'
import CmCheckbox from '.'

export default {
  title: 'Components/Checkbox',
  component: CmCheckbox,
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
} satisfies Meta<typeof CmCheckbox>

export const Default = {
  args: {
    label: 'CheckboxGroup',
    selected: ['selected', 'selected and disabled'],
    checkboxList: [
      {
        label: 'default',
        value: 'default',
      },
      {
        label: 'selected',
        value: 'selected',
      },
      {
        label: 'disabled',
        value: 'disabled',
        disabled: true,
      },
      {
        label: 'selected and disabled',
        value: 'selected and disabled',
        disabled: true,
      },
    ],
  },
}
