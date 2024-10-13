import { travels } from "../../lib";
import { getSortedArray } from "../getSortedArray";

export const getTravels = () =>
  getSortedArray({ array: travels, key: "date", sort: "date" });
