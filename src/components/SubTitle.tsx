import type { SpanProps } from "@durksteedjr/ui";
import { Span } from "@durksteedjr/ui";
import clsx from "clsx";

export interface SubTitleProps extends SpanProps {}

export const SubTitle = ({
  children,
  className,
  ...props
}: SubTitleProps) => (
  <Span
    className={clsx("text-xl font-bold md:text-2xl", className)}
    {...props}
  >
    {children}
  </Span>
);
