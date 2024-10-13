import { works } from "../../lib";
import { getSortedArray } from "../getSortedArray";

export const getWorks = () => getSortedArray({ array: works, key: "title" });
