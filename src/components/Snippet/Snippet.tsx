import { Text } from "../Text";
import { OhanaProps, ohana } from "@ohanaui/react";
import { clsx } from "clsx";

export type SnippetProps = OhanaProps<"pre">;

export const Snippet = ({ children, className, ...props }: SnippetProps) => (
  <ohana.pre
    className={clsx(
      "overflow-x-scroll rounded-xl bg-gray-800 px-4 py-3 md:px-5",
      className,
    )}
    {...props}
  >
    <Text asChild className="text-indigo-200" size="s" type="cousine">
      <ohana.code>{children}</ohana.code>
    </Text>
  </ohana.pre>
);
