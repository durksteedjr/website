import { makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import moonlightII from "./json/moonlightII.json";

export default makeSource({
  contentDirPath: "./content",
  disableImportAliasWarning: true,
  documentTypes: [],
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
