import { Meta } from '@storybook/react'
import CmSelect from '.'
import { CartIcon } from '@nextui-org/shared-icons'

export default {
  title: 'Components/Select',
  component: CmSelect,
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
    selectionMode: {
      options: ['single', 'multiple'],
      control: 'radio',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
    placeholder: {
      control: 'text',
    },
    labelPlacement: {
      options: ['inside', 'outside', 'outside-left'],
      control: 'select',
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: 'boolean',
    },
    errorMsg: {
      control: 'text',
    },
    isOpen: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof CmSelect>

export const Default = {
  args: {
    label: 'default',
    selectedKeys: ['select-item-key-2'],
    disabledKeys: ['select-item-key-3'],
    selectItem: [
      {
        title: 'useIcon',
        id: '1',
        textValue: 'useIcon',
        startContent: <CartIcon className="h-5 w-5" />,
      },
      { title: 'selected', id: '2', textValue: 'selected' },
      { title: 'disabled', id: '3', textValue: 'disabled' },
    ],
  },
}
export const Multiple = {
  args: {
    label: 'multiple',
    selectionMode: 'multiple',
    useChip: true,
    selectedKeys: [
      'select-item-key-1',
      'select-item-key-2',
      'select-item-key-3',
    ],
    disabledKeys: ['select-item-key-3', 'select-item-key-4'],
    selectItem: [
      { title: 'useChip', id: '1', textValue: 'useChip' },
      {
        title: 'useIcon',
        id: '2',
        textValue: 'useIcon',
        startContent: <CartIcon className="h-5 w-5" />,
      },
      {
        title: 'selected and disabled',
        id: '3',
        textValue: 'selected and disabled',
      },
      { title: 'disabled', id: '4', textValue: 'disabled' },
    ],
  },
}
