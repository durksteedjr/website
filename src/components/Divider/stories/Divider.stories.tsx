import type { DividerProps } from "../Divider";
import { Divider } from "../Divider";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DividerProps> = {
  args: {},
  component: Divider,
  title: "Divider",
};

export default meta;

type Story = StoryObj<DividerProps>;

export const Default: Story = {};
