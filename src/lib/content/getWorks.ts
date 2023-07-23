import { allWorks } from "../../../.contentlayer/generated";

export const getWorks = () =>
  allWorks.sort((workA, workB) =>
    workA.title.toLowerCase() > workB.title.toLowerCase()
      ? 1
      : -1
  );
