import clsx from "clsx";
import Link from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import Icon from "@mdi/react";
import { mdilFolder } from "@mdi/light-js";

export interface TreeSectionProps {
  id: string;
  index: number;
  label: string;
  href: string;
  children?: TreeSectionProps[];
  parentId?: string;
}
export function TreeSection(props: {
  treeProps: TreeSectionProps[];
  startDepth?: number;
}) {
  let { treeProps, startDepth } = props;
  startDepth = startDepth || 0;
  return (
    <ul
      className={clsx("flex gap-4 justify-start flex-col")}
      style={{
        textIndent: `${startDepth * 1}rem`,
      }}
    >
      {treeProps.map((item) => (
        <li key={item.id}>
          <div className=" inline-flex gap-1">
            <Icon path={mdilFolder} size={1} />
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              key={item.id}
              href={item.href}
            >
              {item.label}
            </Link>
          </div>
          {item.children && (
            <TreeSection
              treeProps={item.children}
              startDepth={startDepth! + 1}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
