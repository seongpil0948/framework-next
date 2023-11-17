import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import CmModal from '.'
import CmButton from '.././button/'

export default {
  title: 'Components/Modal',
  component: CmModal,
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
    size: {
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        'full',
      ],
      control: { type: 'select' },
    },
    radius: {
      options: ['none', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    shadow: {
      options: ['none', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    alignButton: {
      options: ['justify-start', 'justify-center', 'justify-end'],
      control: { type: 'select' },
    },
    isShow: {
      control: { type: 'boolean' },
    },
    hideCloseButton: {
      control: { type: 'boolean' },
    },
    isDismissable: {
      control: { type: 'boolean' },
    },
    isKeyboardDismissDisabled: {
      control: { type: 'boolean' },
    },
    closeModal: {
      control: { type: 'boolean' },
    },
  },
  args: {
    modalTitle: 'modal title',
    modalContents: 'modal contents',
    size: 'md',
    customFooterButton: (
      <CmButton color="success" variant="solid">
        custom
      </CmButton>
    ),
  },
} satisfies Meta<typeof CmModal>

export const Default = (arg: any) => {
  const [isShow, setIsShow] = useState(false)

  const OpenModal = () => {
    setIsShow(!isShow)
  }
  const CloseModal = () => {
    setIsShow(false)
  }

  return (
    <>
      <CmButton onPress={OpenModal}>click</CmButton>
      <CmModal {...arg} isShow={isShow} closeModal={CloseModal} />
    </>
  )
}
