import { Meta } from "@storybook/react";
import { CmTextArea } from ".";

export default {
  title: "Components/TextArea",
  component: CmTextArea,
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
    variant: {
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
    },
    labelPlacement: {
      control: { type: "select" },
    },
    radius: {
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof CmTextArea>;

export const Default = {
  args: {
    label: "default",
    value: "",
    placeholder: "입력하세요",
  },
};