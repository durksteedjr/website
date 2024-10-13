import type { OhanaProps } from "@ohanaui/react";
import { ohana } from "@ohanaui/react";
import clsx from "clsx";
import { tv, VariantProps } from "tailwind-variants";

const styles = tv({
  base: "w-full max-w-2xl",
  defaultVariants: {
    isCenter: true,
  },
  variants: {
    isCenter: {
      true: "mx-auto",
    },
  },
});

export type ContainerProps = OhanaProps<"div"> & VariantProps<typeof styles>;

export const Container = ({
  children,
  className,
  isCenter = true,
  ...props
}: ContainerProps) => (
  <ohana.div className={clsx(styles({ isCenter }), className)} {...props}>
    {children}
  </ohana.div>
);
