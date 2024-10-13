import { compareAsc } from "date-fns";

export type GetSortedArrayProps<T> = {
  array: T[];
  key: keyof T;
  sort?: "date" | "string";
};

export const getSortedArray = <T>({
  array,
  key,
  sort = "string",
}: GetSortedArrayProps<T>) =>
  array.sort((a, b) => {
    if (sort === "date") return compareAsc(a[key] as string, b[key] as string);
    return a[key].toString().toLowerCase() > b[key].toString().toLowerCase()
      ? 1
      : -1;
  });
