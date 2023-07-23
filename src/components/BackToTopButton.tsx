"use client";

import type { HoverProps } from "@durksteedjr/ui";
import { Flex, Hover, Span } from "@durksteedjr/ui";
import clsx from "clsx";
import { HiArrowSmallUp } from "react-icons/hi2";

import { useScroll } from "../hooks";

export interface BackToTopButtonProps extends HoverProps {}

export const BackToTopButton = ({
  className,
  ...props
}: BackToTopButtonProps) => {
  const [scroll] = useScroll({ behavior: "smooth", top: 0 });

  return (
    <Hover {...props}>
      <button onClick={() => scroll()} type="button">
        <Flex
          className={clsx(
            "flex items-center space-x-1 md:space-x-3",
            className
          )}
        >
          <Span>Top</Span>
          <HiArrowSmallUp />
        </Flex>
      </button>
    </Hover>
  );
};
