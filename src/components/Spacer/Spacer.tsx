import type { OhanaProps } from "@ohanaui/react";
import { ohana } from "@ohanaui/react";
import clsx from "clsx";

export type SpacerProps = OhanaProps<"div">;

export const Spacer = ({ children, className, ...props }: SpacerProps) => (
  <ohana.div className={clsx("grow", className)} {...props}>
    {children}
  </ohana.div>
);
