import type { HeaderProps } from "../Header";
import { Header } from "../Header";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<HeaderProps> = {
  args: {},
  component: Header,
  title: "Header",
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const Default: Story = {};
