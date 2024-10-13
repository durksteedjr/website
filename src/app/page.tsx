import { Card, Divider, Snippet, Text } from "../components";
import { links } from "../lib";
import { ohana } from "@ohanaui/react";
import type { NextPage } from "next";
import NextLink from "next/link";

const Page: NextPage = () => (
  <ohana.section className="flex flex-col space-y-8">
    <Snippet className="mt-4">npx @durksteedjr/cli@latest</Snippet>
    <Divider />
    <ohana.div className="flex flex-col space-y-4">
      {[links.prayers, links.travel, links.work].map((link) => (
        <Card asChild isHover key={link.text}>
          <Text asChild size="l">
            <NextLink href={link.href}>{link.text}</NextLink>
          </Text>
        </Card>
      ))}
    </ohana.div>
  </ohana.section>
);

export default Page;
