import type { OhanaProps } from "@ohanaui/react";
import { ohana } from "@ohanaui/react";
import clsx from "clsx";

export type DividerProps = OhanaProps<"div">;

export const Divider = ({ children, className, ...props }: DividerProps) => (
  <ohana.div
    className={clsx("h-[1px] w-full rounded bg-gray-200", className)}
    {...props}
  >
    {children}
  </ohana.div>
);
