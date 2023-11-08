import { Meta } from '@storybook/react'
import { CmDropdown } from '.'

export default {
  title: 'Components/Dropdown',
  component: CmDropdown,
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
    labelPlacement: {
      control: 'select',
    },
  },
} satisfies Meta<typeof CmDropdown>

export const Default = {
  args: {
    label: 'default',
    dropdownItem: [
      { label: 'Cat', value: 'cat' },
      { label: 'Dog', value: 'dog' },
      { label: 'Elephant', value: 'elephant' },
    ],
  },
}
export const Multiple = {
  args: {
    label: 'multiple',
    selectedKeys: ['dropdown-item-key-dog', 'dropdown-item-key-elephant'],
    selectionMode: 'multiple',
    dropdownItem: [
      { label: 'Cat', value: 'cat' },
      { label: 'Dog', value: 'dog' },
      { label: 'Elephant', value: 'elephant' },
    ],
  },
}
