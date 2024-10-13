import kauaiHawaii1 from "../../../public/assets/travel/kauai-hawaii/1.webp";
import kauaiHawaii2 from "../../../public/assets/travel/kauai-hawaii/2.webp";
import kauaiHawaii3 from "../../../public/assets/travel/kauai-hawaii/3.webp";
import kauaiHawaii4 from "../../../public/assets/travel/kauai-hawaii/4.webp";
import parisFrance1 from "../../../public/assets/travel/paris-france/1.webp";
import parisFrance2 from "../../../public/assets/travel/paris-france/2.webp";
import parisFrance3 from "../../../public/assets/travel/paris-france/3.webp";
import parisFrance4 from "../../../public/assets/travel/paris-france/4.webp";
import rinconPuertoRico1 from "../../../public/assets/travel/rincon-puerto-rico/1.webp";
import rinconPuertoRico2 from "../../../public/assets/travel/rincon-puerto-rico/2.webp";
import rinconPuertoRico3 from "../../../public/assets/travel/rincon-puerto-rico/3.webp";
import rinconPuertoRico4 from "../../../public/assets/travel/rincon-puerto-rico/4.webp";
import { TravelWithSlug } from "../../types";
import slugify from "slugify";

export const travels: TravelWithSlug[] = [
  {
    date: "08/2024",
    images: [parisFrance1, parisFrance2, parisFrance3, parisFrance4],
    title: "Paris, France",
  },
  {
    date: "02/2024",
    images: [
      rinconPuertoRico1,
      rinconPuertoRico2,
      rinconPuertoRico3,
      rinconPuertoRico4,
    ],
    title: "Rincon, Puerto Rico",
  },
  {
    date: "10/2023",
    images: [kauaiHawaii1, kauaiHawaii2, kauaiHawaii3, kauaiHawaii4],
    title: "Kauai, Hawaii",
  },
].map((travel) => ({
  ...travel,
  slug: slugify(`${travel.title}-${travel.date}`).toLowerCase(),
}));
