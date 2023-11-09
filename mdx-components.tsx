import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { parseNumber } from './app/_utils'
import { Link as NextLink } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // a: (props) => (
    //   <Link
    //     isBlock
    //     isExternal
    //     showAnchorIcon
    //     href={props.href}
    //     className="pr-1 pl-2 mx-[-2px]"
    //     {...props}
    //   />
    // ),
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => <Link {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border px-4 my-6 py-3 rounded-xl [&>p]:m-0 border-default-200 dark:border-default-100 bg-default-200/20"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="after:content-['`'] before:content-['`'] h-fit font-mono inline-block whitespace-nowrap text-small rounded-small font-normal bg-transparent px-0 py-0 text-sky-400"
        {...props}
      />
    ),
    // em: (props) => (

    // ),
    // callout: ({ emoji = null, text }) => (
    //   <div className="bg-gray-200 dark:bg-[#333] dark:text-gray-300 flex items-start p-3 my-6 text-base">
    //     <span className="block w-6 text-center text-xl mr-2">{emoji}</span>
    //     <span className="block grow">{text}</span>
    //   </div>
    // ),
    h1: (props) => (
      <h1
        className="dark:text-slate-200 font-extrabold mb-8 sm:text-4xl text-3xl text-slate-900 tracking-tight"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-slate-900 text-2xl tracking-tight font-bold mt-8 mb-4 dark:text-slate-200"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 mb-3 text-xl font-semibold text-slate-900 dark:text-slate-200"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="text-sm leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"
        {...props}
      />
    ),
    hr: (props) => (
      <div
        {...props}
        className="my-8 w-full h-px bg-slate-900 dark:bg-default-100"
      />
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        alt={props.alt ?? 'abacus-image'}
        src={props.src ?? '/abacus.png'}
        width={parseNumber(props.width, 100)}
        height={parseNumber(props.height, 100)}
      />
    ),
    li: (props) => (
      <li
        className={`
          my-px
        `}
        {...props}
      />
    ),
    p: (props) => (
      <p className="font-normal my-3 [blockquote_&]:my-2" {...props} />
    ),
    pre: (props) => {
      return (
        <Snippet size="sm" hideSymbol>
          <span className="inline-flex p-2.5 whitespace-pre-wrap leading-5">
            {props.children}
          </span>
        </Snippet>
      )
    },
    // strong: (props) => (

    // ),
    ul: (props) => <ul className="ml-5 mt-2 mb-5 list-disc" {...props} />,
    ol: (props) => <ul className="ml-5 mt-2 mb-5 list-decimal" {...props} />,
  }
}

const Link = ({
  href,
  children,
}: {
  href?: string
  children?: React.ReactNode
}) => {
  return (
    <NextLink href={href} isExternal showAnchorIcon>
      {children}
    </NextLink>
  )
}
