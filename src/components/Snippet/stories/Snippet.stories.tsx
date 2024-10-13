import type { SnippetProps } from "../Snippet";
import { Snippet } from "../Snippet";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SnippetProps> = {
  args: {
    children: "Children",
  },
  component: Snippet,
  title: "Snippet",
};

export default meta;

type Story = StoryObj<SnippetProps>;

export const Default: Story = {};
