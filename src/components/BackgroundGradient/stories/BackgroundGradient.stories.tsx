import type { BackgroundGradientProps } from "../BackgroundGradient";
import { BackgroundGradient } from "../BackgroundGradient";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<BackgroundGradientProps> = {
  args: {
    className: "h-[100vh]",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
  component: BackgroundGradient,
  title: "BackgroundGradient",
};

export default meta;

type Story = StoryObj<BackgroundGradientProps>;

export const Default: Story = {};
