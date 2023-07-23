import { Box, H1, LinkCard, Stack } from "@durksteedjr/ui";
import type { NextPage } from "next";

import { SubTitle } from "../../components";
import { getPrayers } from "../../lib";

export const metadata = {
  description: "Prayers",
  title: "Prayers"
};

const Page: NextPage = () => (
  <Box>
    <H1>Prayers</H1>
    <Stack className="mt-8 space-y-4">
      {getPrayers().map((prayer) => (
        <LinkCard
          href={`/prayers/${prayer.slug}`}
          isOutlineArrowRight
          key={prayer.title}
        >
          <SubTitle className="pr-8">{prayer.title}</SubTitle>
        </LinkCard>
      ))}
    </Stack>
  </Box>
);

export default Page;
