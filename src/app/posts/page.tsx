import {
  Box,
  Flex,
  H1,
  LinkCard,
  Span,
  Stack
} from "@durksteedjr/ui";
import type { NextPage } from "next";

import {
  SubText,
  SubTitle,
  Text,
  Views
} from "../../components";
import { formatDate, getPosts } from "../../lib";

export const metadata = {
  description: "Posts",
  title: "Posts"
};

const Page: NextPage = () => (
  <Box>
    <H1>Posts</H1>
    <Stack className="mt-8 space-y-4">
      {getPosts().map((post) => (
        <LinkCard href={`/posts/${post.slug}`} key={post.title}>
          <SubTitle className="pr-8">{post.title}</SubTitle>
          <Flex className="items-center space-x-2">
            <SubText>{formatDate(post.date)}</SubText>
            <Span className="!text-xs text-gray-200">•</Span>
            <Views slug={post.slug} type="post" />
          </Flex>
          <Text>{post.description}</Text>
        </LinkCard>
      ))}
    </Stack>
  </Box>
);

export default Page;
