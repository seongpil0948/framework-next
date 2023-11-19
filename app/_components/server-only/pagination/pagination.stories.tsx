import { Meta } from '@storybook/react'
import CmPagination from '.'

export default {
  title: 'Components/Pagination',
  component: CmPagination,
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
    color: {
      control: 'select',
    },
    type: {
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
  },
} satisfies Meta<typeof CmPagination>

export const Default = {
  args: {
    color: 'primary',
  },
}
