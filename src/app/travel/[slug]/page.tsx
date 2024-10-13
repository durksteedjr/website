import { Image, Text, Views } from "../../../components";
import { travels } from "../../../lib";
import { Slug } from "../../../types";
import { getTravel } from "../../../utils";
import { ohana } from "@ohanaui/react";
import type { NextPage } from "next";
import { StaticImageData } from "next/image";

type PageParams = Slug;

export const generateStaticParams = async (): Promise<PageParams[]> =>
  travels.map((travel) => ({ slug: travel.slug }));

export const generateMetadata = async ({ params }: { params: PageParams }) => {
  const travel = getTravel({ slug: params.slug });

  return {
    title: travel.title,
  };
};

const Page: NextPage<{ params: PageParams }> = ({ params }) => {
  const travel = getTravel({ slug: params.slug });

  if (!travel) return null;

  return (
    <ohana.section className="flex flex-col space-y-4 md:space-y-8">
      <Text asChild size="2xl">
        <ohana.h1>{travel.title}</ohana.h1>
      </Text>
      <Text asChild isLight>
        <ohana.div className="flex items-center space-x-2">
          <ohana.span>{travel.date}</ohana.span>
          <ohana.span className="!text-gray-200">•</ohana.span>
          <Views isMutation model="travel" slug={travel.slug} />
        </ohana.div>
      </Text>
      <ohana.div className="flex flex-col space-y-4">
        {travel.images.map((image) => (
          <Image
            fetchPriority="high"
            alt=""
            className="rounded-xl"
            key={image.src}
            src={image as StaticImageData}
          />
        ))}
      </ohana.div>
    </ohana.section>
  );
};

export default Page;
