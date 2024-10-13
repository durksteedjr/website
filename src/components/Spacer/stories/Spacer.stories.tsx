import type { SpacerProps } from "../Spacer";
import { Spacer } from "../Spacer";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SpacerProps> = {
  args: {},
  component: Spacer,
  title: "Spacer",
};

export default meta;

type Story = StoryObj<SpacerProps>;

export const Default: Story = {};
