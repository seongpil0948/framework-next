import {Meta} from "@storybook/react";
import {Inputs} from "../src";

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
      options: ['flat', 'bordered', 'faded', 'underlined'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    labelPlacement: {
      options: ['inside', 'outside', 'outside-left'],
      control: { type: 'select' },
    },
    type: {
      options: ['text', 'password', 'email', 'search'],
      control: { type: 'select' },
    },
    radius: {
      options: [ "none", "sm", "md", "lg", "full" ],
      control: { type: "select" },
    },
  },

} satisfies Meta<typeof Inputs>;

export const Default = {
  args: {
    label: 'default',
    value: '',
    placeholder: '입력하세요'
  },
};

export const Disabled = {
  args: {
    label: 'disabled',
    value: '',
    placeholder: '입력하세요',
    disabled: true
  },
};

export const ReadOnly = {
  args: {
    label: 'disabled',
    value: '',
    placeholder: '입력하세요',
    readOnly: true
  },
};

export const clearable = {
  args: {
    label: 'clearable',
    value: '',
    placeholder: '입력하세요',
    clearable: true
  },
};

export const NoLabel = {
  args: {
    value: '',
    placeholder: '입력하세요',
  },
};

export const ValidateError = {
  args: {
    label: 'is error',
    value: '잘못된 값입니다.',
    placeholder: '입력하세요',
    isError: true,
    errorMessage: '다시 입력해주세요'
  },
};
