import type { WrapperProps } from "../Wrapper";
import { Wrapper } from "../Wrapper";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<WrapperProps> = {
  args: {
    children: "Children",
  },
  component: Wrapper,
  title: "Wrapper",
};

export default meta;

type Story = StoryObj<WrapperProps>;

export const Default: Story = {};
