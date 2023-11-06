import { Meta } from "@storybook/react";
import { CmChip } from ".";

export default {
  title: "Components/Chip",
  component: CmChip,
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
    color: {
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      control: 'select',
    },
    radius: {
      options: ['sm', 'md', 'lg', 'full'],
      control: 'select',
    },
    variant: {
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'dot'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
  },

} satisfies Meta<typeof CmChip>;

export const Default = {
  args: {
    content: 'Default',
  },
};


