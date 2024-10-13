import { OhanaProps } from "@ohanaui/react";
import { ohana } from "@ohanaui/react";
import clsx from "clsx";
import { tv, VariantProps } from "tailwind-variants";

const styles = tv({
  base: "rounded-xl border bg-white",
  defaultVariants: {
    isHover: false,
    size: "m",
  },
  variants: {
    isHover: {
      true: "hover:bg-gray-100",
    },
    size: {
      s: "px-4 py-2",
      m: "px-4 py-4 md:px-6",
    },
  },
});

export type CardProps = OhanaProps<"div"> & VariantProps<typeof styles>;

export const Card = ({
  children,
  className,
  isHover = false,
  size = "m",
  ...props
}: CardProps) => (
  <ohana.div className={clsx(styles({ isHover, size }), className)} {...props}>
    {children}
  </ohana.div>
);
