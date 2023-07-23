import type { SpanProps } from "@durksteedjr/ui";
import { Span } from "@durksteedjr/ui";
import clsx from "clsx";

export interface SubTextProps extends SpanProps {}

export const SubText = ({
  children,
  className,
  ...props
}: SubTextProps) => (
  <Span
    className={clsx(
      "text-sm text-gray-400 md:text-base",
      className
    )}
    {...props}
  >
    {children}
  </Span>
);
