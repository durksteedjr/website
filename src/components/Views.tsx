"use client";

import { useEffect } from "react";

import { useViews } from "../hooks";
import type { SubTextProps } from "./SubText";
import { SubText } from "./SubText";

export interface ViewsProps extends SubTextProps {
  isPost?: boolean;
  slug: string;
  type: "post";
}

export const Views = ({
  isPost = false,
  slug,
  type,
  ...props
}: ViewsProps) => {
  const { mutation, query } = useViews({ slug, type });

  useEffect(() => {
    if (isPost) mutation.mutate();
  }, []);

  return (
    <SubText {...props}>
      {query.data?.views ?? "..."} Views
    </SubText>
  );
};
