"use client";

import type { LinkHoverProps } from "@durksteedjr/ui";
import { LinkHover } from "@durksteedjr/ui";
import { usePathname } from "next/navigation";

export interface LinkHoverWithPathnameProps
  extends LinkHoverProps {}

export const LinkHoverWithPathname = ({
  href,
  ...props
}: LinkHoverWithPathnameProps) => {
  const pathname = usePathname();

  return (
    <LinkHover
      href={href}
      isActive={href === pathname}
      {...props}
    />
  );
};
