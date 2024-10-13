import type { LinkProps } from "../Link";
import { Link } from "../Link";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<LinkProps> = {
  args: {
    children: "Children",
    href: "",
  },
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    textProps: {
      table: {
        disable: true,
      },
    },
  },
  component: Link,
  title: "Link",
};

export default meta;

type Story = StoryObj<LinkProps>;

export const Default: Story = {};
