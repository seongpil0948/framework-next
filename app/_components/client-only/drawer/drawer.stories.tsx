import { Meta } from "@storybook/react";
import Drawer from ".";

export default {
  title: "Components/Drawer",
  component: Drawer,
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
    title: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Drawer>;

export const Default = {
  args: {
    label: "default",
    value: "",
    placeholder: "입력하세요",
  },
};
