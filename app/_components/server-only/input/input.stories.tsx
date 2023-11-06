import { Meta } from "@storybook/react";
import { Inputs } from ".";

export default {
  title: "Components/Input",
  component: Inputs,
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
    type: {
      control: { type: "select" },
    },
    radius: {
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Inputs>;

export const Default = {
  args: {
    label: "default",
    value: "",
    placeholder: "입력하세요",
  },
};