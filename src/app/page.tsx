import {
  Box,
  Divider,
  LinkCard,
  Snippet,
  Stack
} from "@durksteedjr/ui";
import type { NextPage } from "next";

import { SubTitle } from "../components";
import { links } from "../lib";

const Page: NextPage = () => (
  <Box>
    <Snippet>npx @durksteedjr/cli@latest</Snippet>
    <Divider className="my-8" />
    <Stack className="space-y-4">
      {[links.posts, links.prayers, links.work].map((link) => (
        <LinkCard
          href={link.href}
          isOutlineArrowRight
          key={link.text}
        >
          <SubTitle>{link.text}</SubTitle>
        </LinkCard>
      ))}
    </Stack>
  </Box>
);

export default Page;
