import kauaiHawaii1 from "../../../../public/assets/travel/kauai-hawaii/1.webp";
import type { AvatarProps } from "../Avatar";
import { Avatar } from "../Avatar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<AvatarProps> = {
  args: {
    alt: "Avatar",
    blurDataURL: kauaiHawaii1.src,
    height: kauaiHawaii1.height,
    src: kauaiHawaii1.src,
    width: kauaiHawaii1.width,
  },
  argTypes: {
    alt: {
      table: {
        disable: true,
      },
    },
    blurDataURL: {
      table: {
        disable: true,
      },
    },
    height: {
      table: {
        disable: true,
      },
    },
    src: {
      table: {
        disable: true,
      },
    },
    width: {
      table: {
        disable: true,
      },
    },
  },
  component: Avatar,
  title: "Avatar",
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const Default: Story = {};
