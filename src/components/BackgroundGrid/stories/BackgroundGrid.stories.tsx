import type { BackgroundGridProps } from "../BackgroundGrid";
import { BackgroundGrid } from "../BackgroundGrid";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<BackgroundGridProps> = {
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
  component: BackgroundGrid,
  title: "BackgroundGrid",
};

export default meta;

type Story = StoryObj<BackgroundGridProps>;

export const Default: Story = {};
