import { Meta } from "@storybook/react";
import { Buttons } from ".";
import { Camera, HeadphonesIcon, Notification } from "@nextui-org/shared-icons";

export default {
  title: "Components/Button",
  component: Buttons,
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
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "light", "shadow"],
    },
    color: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
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
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Buttons>;

export const Default = {
  args: {
    children: "button",
  },
};

export const Disabled = {
  args: {
    children: "disabled",
    disabled: true,
  },
};

export const WithIcon = {
  args: {
    children: "icon",
    startContent: <Notification className="fill-current" />,
    endContent: <Camera className="fill-current" />,
  },
};

export const IconButton = {
  args: {
    isIconOnly: true,
    children: <HeadphonesIcon className="w-5 h-5" />,
  },
};

export const CustomWithClassNames = {
  args: {
    radius: "full",
    className:
      "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",
  },
};
