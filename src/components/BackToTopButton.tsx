"use client";

import { useScroll } from "../hooks";
import { Text } from "./Text";
import { OhanaProps } from "@ohanaui/react";
import clsx from "clsx";

export type BackToTopButtonProps = OhanaProps<"button">;

export const BackToTopButton = ({
  className,
  ...props
}: BackToTopButtonProps) => {
  const { scroll } = useScroll();

  return (
    <Text asChild isHover size="s">
      <button
        className={clsx("flex items-center space-x-1 md:space-x-3", className)}
        onClick={() => scroll({ behavior: "smooth", top: 0 })}
        type="button"
        {...props}
      >
        Top
      </button>
    </Text>
  );
};
