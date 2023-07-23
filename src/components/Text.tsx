import type { SpanProps } from "@durksteedjr/ui";
import { Span } from "@durksteedjr/ui";
import clsx from "clsx";

export interface TextProps extends SpanProps {}

export const Text = ({
  children,
  className,
  ...props
}: TextProps) => (
  <Span className={clsx("text-gray-500", className)} {...props}>
    {children}
  </Span>
);
