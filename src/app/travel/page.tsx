import { Card, Text } from "../../components";
import { getTravels } from "../../utils";
import { ohana } from "@ohanaui/react";
import type { NextPage } from "next";
import NextLink from "next/link";

export const metadata = {
  description: "Travel",
  title: "Travel",
};

const Page: NextPage = () => (
  <ohana.section className="flex flex-col space-y-8">
    <Text asChild size="2xl">
      <ohana.h1>Travel</ohana.h1>
    </Text>
    <ohana.div className="flex flex-col space-y-4">
      {getTravels().map((travel) => (
        <Card
          asChild
          className="flex flex-col space-y-0.5"
          isHover
          key={travel.title}
        >
          <NextLink href={`/travel/${travel.slug}`}>
            <Text asChild size="l">
              <ohana.h2>{travel.title}</ohana.h2>
            </Text>
            <Text isLight size="s">
              {travel.date}
            </Text>
          </NextLink>
        </Card>
      ))}
    </ohana.div>
  </ohana.section>
);

export default Page;
