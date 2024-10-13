import { Card, Text } from "../../components";
import { getWorks } from "../../utils";
import { ohana } from "@ohanaui/react";
import type { NextPage } from "next";
import NextLink from "next/link";

export const metadata = {
  description: "Work",
  title: "Work",
};

const Page: NextPage = () => (
  <ohana.section className="flex flex-col space-y-8">
    <Text asChild size="2xl">
      <ohana.h1>Work</ohana.h1>
    </Text>
    <ohana.div className="flex flex-col space-y-4">
      {getWorks().map((work) => (
        <Card
          asChild
          className="flex flex-col space-y-0.5 md:space-y-1"
          isHover
          key={work.title}
        >
          <NextLink href={work.url} target="_blank">
            <Text asChild size="l">
              <ohana.h2>{work.title}</ohana.h2>
            </Text>
            <Text isLight size="m">
              {work.description}
            </Text>
          </NextLink>
        </Card>
      ))}
    </ohana.div>
  </ohana.section>
);

export default Page;
