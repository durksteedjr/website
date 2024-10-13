import kauaiHawaii1 from "../../../../public/assets/travel/kauai-hawaii/1.webp";
import type { ImageProps } from "../Image";
import { Image } from "../Image";
import { ohana } from "@ohanaui/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ImageProps> = {
  args: {
    alt: "Image",
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
    src: {
      table: {
        disable: true,
      },
    },
  },
  component: Image,
  decorators: (Story) => (
    <ohana.div className="h-[500px] w-[500px]">
      <Story />
    </ohana.div>
  ),
  title: "Image",
};

export default meta;

type Story = StoryObj<ImageProps>;

export const Default: Story = {};
