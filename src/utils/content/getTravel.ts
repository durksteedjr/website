import { travels } from "../../lib";
import { Slug } from "../../types";

export type GetTravelProps = Slug;

export const getTravel = ({ slug }: GetTravelProps) =>
  travels.find((travel) => slug === travel.slug);
