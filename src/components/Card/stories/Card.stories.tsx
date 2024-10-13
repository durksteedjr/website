import type { CardProps } from "../Card";
import { Card } from "../Card";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CardProps> = {
  args: {
    children: "Children",
    isHover: false,
    size: "m",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m"],
    },
  },
  component: Card,
  title: "Card",
};

export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {};
