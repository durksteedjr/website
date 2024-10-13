import type { TextProps } from "../Text";
import { Text } from "../Text";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<TextProps> = {
  args: {
    children: "Children",
    isHover: false,
    isLight: false,
    size: "m",
    type: "nunitoSans",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m", "l", "xl", "2xl"],
    },
    type: {
      control: "select",
      options: ["cousine", "nunitoSans"],
    },
  },
  component: Text,
  title: "Text",
};

export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {};
