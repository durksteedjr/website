import { Box, H1, LinkCard, Stack } from "@durksteedjr/ui";
import type { NextPage } from "next";

import { SubTitle, Text } from "../../components";
import { getWorks } from "../../lib";

export const metadata = {
  description: "Work",
  title: "Work"
};

const Page: NextPage = () => (
  <Box>
    <H1>Work</H1>
    <Stack className="mt-8 space-y-4">
      {getWorks().map((work) => (
        <LinkCard
          href={work.href}
          isOutlineArrowUpRight
          key={work.title}
          target="_blank"
        >
          <SubTitle className="pr-8">{work.title}</SubTitle>
          <Text>{work.description}</Text>
        </LinkCard>
      ))}
    </Stack>
  </Box>
);

export default Page;
