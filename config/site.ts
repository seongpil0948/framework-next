import type { TreeSectionProps } from "@/app/_components/client-only/tree-section";
import { THrefLinks } from "@/types";

export type SiteConfig = typeof siteConfig;
export const LANDING_PATH = "/home";
export const siteConfig = {
  name: "Abacus React Framework",
  description: "Make beautiful websites regardless of your design experience.",
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
const linkToTree = (links: THrefLinks): TreeSectionProps[] => {
  return links.map((link) => {
    const tree = {
      id: link.href,
      index: 0,
      parentid: "",
      ...link,
    } as TreeSectionProps;
    if (link.children) {
      return {
        ...tree,
        children: linkToTree(link.children),
      };
    }
    return tree;
  });
};
export const homeNavItems = linkToTree([
  {
    label: "Code",
    href: "/code",
  },
  {
    label: "Doc",
    href: "/doc",
  },
]);
export const homeNavMenuItems = linkToTree([
  {
    label: "Code",
    href: "/code",
  },
  {
    label: "Doc",
    href: "/doc",
  },
  {
    label: "Logout",
    href: "/logout",
  },
]);

export const docNavMenuItems = linkToTree([
  {
    label: "Convention",
    href: "/doc/convention",
    children: [
      {
        label: "File Structure",
        href: "/doc/convention/file-structure",
      },
      { label: "File Basic", href: "/doc/convention/file-basic" },
      { label: "Naming", href: "/doc/convention/name" },
    ],
  },
  {
    label: "Guide",
    href: "/doc/guide",
    children: [
      {
        label: "Keyword",
        href: "/doc/guide/keyword",
      },
      {
        label: "Mdx",
        href: "/doc/guide/mdx",
      },
      {
        label: "Server Client Pattern",
        href: "/doc/guide/server-client-pattern",
      },
    ],
  },
]);
