import { OhanaProps, ohana } from "@ohanaui/react";
import { clsx } from "clsx";

export type BackgroundGridProps = OhanaProps<"div">;

export const BackgroundGrid = ({
  children,
  className,
  ...props
}: BackgroundGridProps) => (
  <ohana.div
    className={clsx(
      "bg-[linear-gradient(rgba(0,0,0,0.0375)_1px,rgba(255,255,255,0)_1px),linear-gradient(90deg,rgba(0,0,0,0.0375)_1px,rgba(255,255,255,0)_1px)] bg-[length:2rem_2rem] [mask-image:linear-gradient(175deg,rgba(255,255,255,0)_5%,rgba(255,255,255,1)_20%,rgba(255,255,255,0)_60%)] lg:bg-[length:3rem_3rem]",
      className,
    )}
    {...props}
  >
    {children}
  </ohana.div>
);
