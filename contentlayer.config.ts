import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import moonlightII from "./json/moonlightII.json";

export const Post = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (content) =>
        content._raw.flattenedPath.replace("posts/", ""),
      type: "string"
    }
  },
  fields: {
    date: {
      required: true,
      type: "date"
    },
    description: {
      required: true,
      type: "string"
    },
    title: {
      required: true,
      type: "string"
    }
  },
  contentType: "mdx",
  filePathPattern: "posts/**/*.mdx",
  name: "Post"
}));

export const Prayer = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (content) =>
        content._raw.flattenedPath.replace("prayers/", ""),
      type: "string"
    }
  },
  fields: {
    title: {
      required: true,
      type: "string"
    }
  },
  contentType: "mdx",
  filePathPattern: "prayers/**/*.mdx",
  name: "Prayer"
}));

export const Work = defineDocumentType(() => ({
  fields: {
    description: {
      required: true,
      type: "string"
    },
    href: {
      required: true,
      type: "string"
    },
    title: {
      required: true,
      type: "string"
    }
  },
  contentType: "mdx",
  filePathPattern: "work/**/*.mdx",
  name: "Work"
}));

export default makeSource({
  contentDirPath: "./content",
  disableImportAliasWarning: true,
  documentTypes: [Post, Prayer, Work],
  mdx: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank"
        }
      ],
      [
        rehypePrettyCode,
        {
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          theme: moonlightII
        }
      ],
      rehypeSlug,
      rehypeAutolinkHeadings
    ]
  }
});
