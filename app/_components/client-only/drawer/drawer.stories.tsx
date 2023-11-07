import { Meta, StoryObj } from '@storybook/react'
import Drawer from '.'
import { Logo } from '../../server-only/icons'
import clsx from 'clsx'
import { NextUIProvider } from '@nextui-org/system'

export default {
  title: 'Components/Drawer',
  component: Drawer,
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
    title: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Drawer>

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  args: {
    title: 'Drawer',
  },
}

export const AsSidebar: Story = {
  args: {
    title: 'Sidebar',
    sheetProps: {
      placement: 'left',
      classNames: {
        wrapper: clsx(' absolute'),
      },
      backdrop: 'transparent',
      isDismissable: false,
      hideCloseButton: true,
    },
  },
  decorators: [
    (Story) => (
      <ExampleApp>
        <Story />
      </ExampleApp>
    ),
  ],
}

function ExampleApp(props: { children?: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div className="flex flex-col w-screen h-screen">
        <nav className=" flex w-full bg-slate-400">
          {props.children}
          <Logo />
          <p className="font-bold text-inherit">Example</p>
        </nav>
        <main className="w-full h-full max-h-full relative">zz</main>
      </div>
    </NextUIProvider>
  )
}
