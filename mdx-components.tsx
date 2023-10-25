import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { parseNumber } from "./app/_utils";
import { title } from "./app/_components/primitives";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1
        className={title({ color: "violet" })}
        // style={{ color: "tomato" }}
        {...props}
      />
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt={props.alt ?? "abacus-image"}
        src={props.src ?? "/abacus.png"}
        width={parseNumber(props.width, 100)}
        height={parseNumber(props.height, 100)}
      />
    ),
  };
}
