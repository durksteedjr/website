import { Image, ImageProps } from "../Image";
import { ohana } from "@ohanaui/react";
import { clsx } from "clsx";

export type AvatarProps = ImageProps;

export const Avatar = ({ className, ...props }: ImageProps) => (
  <ohana.div
    className={clsx(
      "h-20 w-20 rounded-full bg-gradient-to-br from-green-400 via-cyan-400 to-pink-400 p-1 md:h-28 md:w-28 md:p-[0.375rem]",
      className,
    )}
  >
    <Image className="h-full w-full rounded-full bg-white" {...props} />
  </ohana.div>
);
