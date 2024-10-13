import { slug } from "./slug.types";
import { staticImageData } from "./staticImageData.types";
import { z } from "zod";

export const travel = z.object({
  date: z.string().datetime(),
  images: staticImageData.array(),
  title: z.string(),
});

export type Travel = z.TypeOf<typeof travel>;

export const travelWithSlug = travel.merge(slug);

export type TravelWithSlug = z.TypeOf<typeof travelWithSlug>;
