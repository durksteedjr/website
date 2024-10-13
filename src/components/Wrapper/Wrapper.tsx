import { OhanaProps, ohana } from "@ohanaui/react";
import { clsx } from "clsx";

export type WrapperProps = OhanaProps<"div">;

export const Wrapper = ({ children, className, ...props }: WrapperProps) => (
  <ohana.div
    className={clsx(
      "px-6 py-12 text-base text-gray-800 antialiased md:px-8 md:py-20 md:text-lg [&_*]:transition-all",
      className,
    )}
    {...props}
  >
    {children}
  </ohana.div>
);
