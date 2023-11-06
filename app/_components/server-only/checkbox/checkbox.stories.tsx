import { Meta } from "@storybook/react";
import { CmCheckbox } from ".";

export default {
  title: "Components/Checkbox",
  component: CmCheckbox,
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
      options: ["sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      control: "select",
    },
    validationState: {
      options: ['valid', 'invalid'],
      control: "radio",
    },
  },
} satisfies Meta<typeof CmCheckbox>;

export const Default = {
  args: {
    label: "default",
    seleted: true,
  },
};
