"use client";

import { Text, TextProps } from "../Text";
import { clsx } from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export type LinkProps = ComponentProps<typeof NextLink> & {
  textProps?: TextProps;
};

export const Link = ({
  className,
  href,
  textProps = {},
  ...props
}: LinkProps) => {
  const pathname = usePathname();

  return (
    <Text
      asChild
      className={clsx(href === pathname && "text-inherit", className)}
      isHover
      {...textProps}
    >
      <NextLink href={href} {...props} />
    </Text>
  );
};
