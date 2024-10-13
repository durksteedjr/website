import { OhanaProps, ohana } from "@ohanaui/react";
import { clsx } from "clsx";

export type BackgroundGradientProps = OhanaProps<"div">;

export const BackgroundGradient = ({
  children,
  className,
  ...props
}: BackgroundGradientProps) => (
  <ohana.div
    className={clsx(
      "bg-[linear-gradient(73deg,_transparent_0%,_rgba(85,255,141,0.0875)_20%,_rgba(51,234,255,0.15)_50%,_rgba(208,4,209,0.0375)_80%,_transparent_100%)] [mask-image:linear-gradient(175deg,rgba(255,255,255,0)_5%,rgba(255,255,255,1)_20%,rgba(255,255,255,0)_60%)]",
      className,
    )}
    {...props}
  >
    {children}
  </ohana.div>
);
