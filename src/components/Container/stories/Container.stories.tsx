import type { ContainerProps } from "../Container";
import { Container } from "../Container";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ContainerProps> = {
  args: {
    children: "Children",
    isCenter: true,
  },
  component: Container,
  title: "Container",
};

export default meta;

type Story = StoryObj<ContainerProps>;

export const Default: Story = {};
