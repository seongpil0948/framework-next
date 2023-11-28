import * as d3 from 'd3'
import { Meta, StoryObj } from '@storybook/react'
import BarChart from '.'

const meta = {
  title: 'D3/Bar',
  component: BarChart,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    margin: {
      control: {
        type: 'number',
        min: 100,
        max: 300,
        step: 10,
      },
    },
    width: {
      control: {
        type: 'number',
        min: 500,
        max: 1000,
        step: 10,
      },
    },
    height: {
      control: {
        type: 'number',
        min: 500,
        max: 1000,
        step: 10,
      },
    },
    colorCode: {
      control: { type: 'color', presetColors: ['red', 'green'] },
    },
  },
} satisfies Meta<typeof BarChart>
export default meta

type Story = StoryObj<typeof meta>

export const Bar: Story = {
  render: (arg) => <BarChart {...arg} />,
}
