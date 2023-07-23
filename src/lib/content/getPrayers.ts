import { allPrayers } from "../../../.contentlayer/generated";

export const getPrayers = () =>
  allPrayers.sort((prayerA, prayerB) =>
    prayerA.title.toLowerCase() > prayerB.title.toLowerCase()
      ? 1
      : -1
  );
