import type { NextPage } from "next";

import { MDX, Views } from "../../../components";
import { getPost, getPosts } from "../../../lib";

interface PageParams {
  slug: string;
}

export const generateStaticParams = async (): Promise<
  PageParams[]
> => getPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({
  params
}: {
  params: PageParams;
}) => {
  const post = getPost(params.slug);

  return {
    description: post?.title,
    title: post?.title
  };
};

const Page: NextPage<{ params: PageParams }> = ({ params }) => {
  const post = getPost(params.slug);

  if (!post) return null;

  return (
    <article>
      <Views
        className="mb-4 block"
        isPost
        slug={post.slug}
        type="post"
      />
      <MDX code={post.body.code} />
    </article>
  );
};

export default Page;
