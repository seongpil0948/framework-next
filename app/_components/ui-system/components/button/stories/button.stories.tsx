import React from "react";
import {Meta} from "@storybook/react";
import {button} from "@nextui-org/theme";
import {Camera, HeadphonesIcon, Notification} from "@nextui-org/shared-icons";

import {Button} from "../src";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "light", "shadow"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Button>;

const defaultProps = {
  children: "Button",
  ...button.defaultVariants,
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const IsDisabled = {
  args: {
    ...defaultProps,
    isDisabled: true,
  },
};

export const WithIcons = {
  args: {
    ...defaultProps,
    startContent: <Notification className="fill-current" />,
    endContent: <Camera className="fill-current" />,
  },
};

export const IconButton = {
  args: {
    ...defaultProps,
    isIconOnly: true,
    children: <HeadphonesIcon className="w-5 h-5" />,
  },
};

export const CustomWithClassNames = {
  args: {
    ...defaultProps,
    radius: "full",
    className: "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",
  },
};