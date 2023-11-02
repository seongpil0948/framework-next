import {Meta} from "@storybook/react";
import {Inputs} from "../src/inputs";

export default {
  title: "Example/Input",
  component: Inputs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
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
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ['flat', 'bordered', 'faded', 'underlined'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    labelPosition: {
      options: ['inside', 'outside', 'outside-left'],
      control: { type: 'radio' },
    },
    type: {
      options: ['text', 'password', 'email', 'search'],
      control: { type: 'radio' },
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
