import { Meta } from '@storybook/react'
import CmAccordion from '.'
import { HeadphonesIcon } from '@nextui-org/shared-icons'

export default {
  title: 'Components/Accordion',
  component: CmAccordion,
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
      options: ['light', 'shadow', 'bordered', 'splitted'],
      control: { type: 'select' },
    },
    selectionMode: {
      options: ['none', 'single', 'multiple'],
      control: { type: 'select' },
    },
    selectionBehavior: {
      options: ['toggle', 'replace'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof CmAccordion>

export const Default = {
  args: {
    accordionList: [
      {
        id: 1,
        ariaLabel: 'default',
        title: 'default',
        contents: 'contents',
      },
      {
        id: 2,
        ariaLabel: 'use subtitle',
        title: 'use subtitle',
        subtitle: 'subtitle',
        contents: 'contents2',
      },
      {
        id: 3,
        ariaLabel: 'disabled',
        title: 'is disabled',
        contents: '',
        disabled: true,
      },
      {
        id: 4,
        ariaLabel: 'custom',
        title: <span className="text-secondary">it&#39;s custom title</span>,
        subtitle: <span className="text-primary">it&#39;s custom style</span>,
        indicator: <HeadphonesIcon className="w-5 h-5" />,
        disableIndicatorAnimation: true,
        contents: (
          <div>
            hi it&#39;s <strong>custom style</strong>
          </div>
        ),
      },
      {
        id: 5,
        ariaLabel: 'use icon',
        title: 'use icon',
        startContent: <HeadphonesIcon className="w-5 h-5" />,
        contents: 'use icon header',
      },
    ],
  },
}
