import { useState } from "react";
import type { Meta } from '@storybook/react';
import { CmModal } from ".";
import { CmButton } from ".././button/";

export default {
  title: "Components/Modal",
  component: CmModal,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/profile",
        query: {
          user: "santa",
        },
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
    },
    radius: {
      control: { type: "select" },
    },
    shadow: {
      control: { type: "select" },
    },
    alignButton: {
      control: { type: "select" },
    },
  },
  args: {
    modalTitle: 'modal title',
    modalContents: 'modal contents',
    size: 'md',
    customFooterButton: 
      <CmButton color="success" variant="solid">
        custom
      </CmButton>,
  },
} satisfies Meta<typeof CmModal>;

export const Default= (arg: any) => {
  const [isShow, setIsShow] = useState(false);

  const OpenModal = () => {
    setIsShow(!isShow);
  };
  const CloseModal = () => {
    setIsShow(false);
  };

  return (
    <>
      <CmButton onClick={OpenModal}>click</CmButton>
      <CmModal {...arg} isShow={isShow} closeModal={CloseModal}/>
    </>
  )
};