import type { NextPage } from "next";

import { MDX } from "../../../components";
import { getPrayer, getPrayers } from "../../../lib";

interface PageParams {
  slug: string;
}

export const generateStaticParams = async (): Promise<
  PageParams[]
> => getPrayers().map((prayer) => ({ slug: prayer.slug }));

export const generateMetadata = async ({
  params
}: {
  params: PageParams;
}) => {
  const prayer = getPrayer(params.slug);

  return {
    description: prayer?.title,
    title: prayer?.title
  };
};

const Page: NextPage<{ params: PageParams }> = ({ params }) => {
  const prayer = getPrayer(params.slug);

  if (!prayer) return null;

  return (
    <article>
      <MDX code={prayer.body.code} />
    </article>
  );
};

export default Page;
