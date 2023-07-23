import { compareDesc } from "date-fns";

import { allPosts } from "../../../.contentlayer/generated";

export const getPosts = () =>
  allPosts.sort((postA, postB) =>
    compareDesc(new Date(postA.date), new Date(postB.date))
  );
