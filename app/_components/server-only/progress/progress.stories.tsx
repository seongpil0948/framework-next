import { Meta } from '@storybook/react'
import { CmProgress } from '.'

export default {
  title: 'Components/Progress',
  component: CmProgress,
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
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
    radius: {
      control: 'select',
    },
  },
} satisfies Meta<typeof CmProgress>

export const Default = {
  args: {
    label: 'default',
    value: 77,
  },
}
// export const Circular = {
//   args: {
//   },
// }
