import { Text, type TextProps } from "./components";
import { ohana } from "@ohanaui/react";
import type { MDXComponents } from "mdx/types";

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  ...components,
  h1: ({ children, ...props }: TextProps) => (
    <Text asChild size="2xl" {...props}>
      <ohana.h1>{children}</ohana.h1>
    </Text>
  ),
  h2: ({ children, ...props }: TextProps) => (
    <Text asChild className="mt-12 md:mt-16" size="xl" {...props}>
      <ohana.h2>{children}</ohana.h2>
    </Text>
  ),
  p: ({ children, ...props }: TextProps) => (
    <Text asChild className="mt-4 md:mt-8" isLight size="m" {...props}>
      <ohana.p>{children}</ohana.p>
    </Text>
  ),
});
