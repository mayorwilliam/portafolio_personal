import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  p: (props) => <p {...props} />,
  a: (props) => <a target="_blank" rel="noopener noreferrer" {...props} />,
  code: (props) => <code {...props} />,
  pre: (props) => <pre {...props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li {...props} />,
  blockquote: (props) => <blockquote {...props} />,
  img: (props) => (
    <Image
      src={props.src ?? ""}
      alt={props.alt ?? ""}
      width={720}
      height={400}
      style={{ width: "100%", height: "auto", borderRadius: "12px" }}
    />
  ),
};
