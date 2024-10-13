import { Card, Text } from "../../components";
import { getPrayers } from "../../utils";
import { ohana } from "@ohanaui/react";
import type { NextPage } from "next";
import NextLink from "next/link";

export const metadata = {
  description: "Prayers",
  title: "Prayers",
};

const Page: NextPage = async () => (
  <ohana.section className="flex flex-col space-y-8">
    <Text asChild size="2xl">
      <ohana.h1>Prayers</ohana.h1>
    </Text>
    <ohana.div className="flex flex-col space-y-4">
      {(await getPrayers()).map((prayer) => (
        <Card asChild isHover key={prayer.title}>
          <Text asChild size="l">
            <NextLink href={`/prayers/${prayer.slug}`}>{prayer.title}</NextLink>
          </Text>
        </Card>
      ))}
    </ohana.div>
  </ohana.section>
);

export default Page;
