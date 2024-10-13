import type { OhanaProps } from "@ohanaui/react";
import { ohana } from "@ohanaui/react";
import { clsx } from "clsx";
import { tv, VariantProps } from "tailwind-variants";

const styles = tv({
  defaultVariants: {
    size: "m",
    type: "nunitoSans",
  },
  variants: {
    isHover: {
      true: "text-gray-500 hover:text-inherit",
    },
    isLight: {
      true: "text-gray-500",
    },
    size: {
      s: "text-sm font-light md:text-base",
      m: "text-base font-normal md:text-lg",
      l: "text-xl font-bold md:text-2xl",
      xl: "text-2xl font-bold md:text-3xl",
      "2xl":
        "text-2xl font-extrabold sm:!text-4xl md:!text-5xl [@media(min-width:355px)]:text-3xl",
    },
    type: {
      cousine: "font-cousine",
      nunitoSans: "font-nunito-sans",
    },
  },
});

export type TextProps = OhanaProps<"span"> & VariantProps<typeof styles>;

export const Text = ({
  children,
  className,
  isHover = false,
  isLight,
  size = "m",
  type = "nunitoSans",
  ...props
}: TextProps) => (
  <ohana.span
    className={clsx(styles({ isHover, isLight, size, type }), className)}
    {...props}
  >
    {children}
  </ohana.span>
);
