import type { SkeletonProps } from "../Skeleton";
import { Skeleton } from "../Skeleton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SkeletonProps> = {
  args: {
    className: "!h-16 !w-16",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
  component: Skeleton,
  title: "Skeleton",
};

export default meta;

type Story = StoryObj<SkeletonProps>;

export const Default: Story = {};
