"use client";

import { A, Code, H1, H2, H3, P, Pre } from "@durksteedjr/ui";
import { useMDXComponent } from "next-contentlayer/hooks";

export interface MDXProps {
  code: string;
}

export const MDX = ({ code }: MDXProps) => {
  const MDXComponent = useMDXComponent(code);

  return (
    <MDXComponent
      components={{
        a: A,
        code: Code,
        h1: H1,
        h2: H2,
        h3: H3,
        p: P,
        pre: Pre
      }}
    />
  );
};
