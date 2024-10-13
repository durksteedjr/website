import { OhanaProps } from "@ohanaui/react";
import { ohana } from "@ohanaui/react";
import { clsx } from "clsx";

export type SkeletonProps = Omit<OhanaProps<"div">, "children">;

export const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <ohana.div
    className={clsx(
      "h-full w-full animate-pulse rounded-xl bg-gray-100",
      className,
    )}
    {...props}
  />
);
