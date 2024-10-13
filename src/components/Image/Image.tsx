import { ohana } from "@ohanaui/react";
import NextImage from "next/image";
import { ComponentProps } from "react";

export type ImageProps = ComponentProps<typeof NextImage>;

export const Image = ({ ...props }: ImageProps) => (
  <ohana.div className="relative h-full w-full">
    <NextImage placeholder="blur" {...props} />
  </ohana.div>
);
