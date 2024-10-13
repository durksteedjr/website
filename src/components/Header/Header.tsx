"use client";

import profile from "../../../public/assets/profile.webp";
import { DESCRIPTION, links, TITLE } from "../../lib";
import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { ohana } from "@ohanaui/react";
import type { OhanaProps } from "@ohanaui/react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

export type HeaderProps = Omit<OhanaProps<"header">, "children">;

export const Header = ({ className, ...props }: HeaderProps) => {
  const pathname = usePathname();

  const HeaderOhanaElementDescription = pathname === "/" ? "p" : "span";
  const HeaderOhanaElementTile = pathname === "/" ? "h1" : "span";

  return (
    <ohana.header
      className={clsx("flex items-center space-x-6 md:space-x-8", className)}
      {...props}
    >
      <ohana.a href={links.home.href}>
        <Avatar alt="Avatar" src={profile} />
      </ohana.a>
      <ohana.div className="flex flex-col space-y-0.5 md:space-y-1">
        <Text asChild size="2xl">
          <HeaderOhanaElementTile>
            {TITLE.split(" (")[0]}
          </HeaderOhanaElementTile>
        </Text>
        <Text asChild isLight size="m">
          <HeaderOhanaElementDescription>
            {DESCRIPTION}
          </HeaderOhanaElementDescription>
        </Text>
      </ohana.div>
    </ohana.header>
  );
};
