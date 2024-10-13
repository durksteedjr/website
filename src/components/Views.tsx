"use client";

import { useViews } from "../hooks";
import { Skeleton } from "./Skeleton";
import { OhanaProps } from "@ohanaui/react";
import { ohana } from "@ohanaui/react";
import { useEffect } from "react";

export type ViewsProps = {
  isMutation?: boolean;
  model: "travel";
  slug: string;
} & Omit<OhanaProps<"span">, "children">;

export const Views = ({
  isMutation = false,
  slug,
  model = "travel",
  ...props
}: ViewsProps) => {
  const { mutation, query } = useViews({ model, slug });

  useEffect(() => {
    if (isMutation) mutation.mutate();
  }, []);

  if (!query.data) return <Skeleton className="!h-7 !w-16" />;

  return (
    <ohana.span {...props}>
      {query.data?.views
        ? `${query.data?.views} ${query.data?.views > 1 ? "Views" : "View"}`
        : "..."}
    </ohana.span>
  );
};
