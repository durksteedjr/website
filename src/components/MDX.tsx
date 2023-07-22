"use client";

import { useMDXComponent } from "next-contentlayer/hooks";

export interface MDXProps {
  code: string;
}

export const MDX = ({ code }: MDXProps) => {
  const MDXComponent = useMDXComponent(code);
  return <MDXComponent />;
};
