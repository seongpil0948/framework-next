import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { parseNumber } from './app/_utils'
import { Link as NextLink } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
// import CmTitle from '@/app/_components/server-only/title'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => <Link {...props} />,
    blockquote: (props) => (
      <blockquote
        className="my-6 rounded-xl border border-default-200 bg-default-200/20 px-4 py-3 dark:border-default-100 [&>p]:m-0"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="inline-block h-fit whitespace-nowrap rounded-small bg-transparent px-0 py-0 font-mono text-small font-normal text-sky-400 before:content-['`'] after:content-['`']"
        {...props}
      />
    ),
    h1: (props) => (
      <h1
        className="mb-5 text-5xl font-bold leading-tight text-slate-900 dark:text-slate-200"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="my-10 text-3xl font-bold text-slate-900 dark:text-slate-200"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mb-8 mt-10 text-2xl font-semibold text-slate-900 dark:text-slate-200"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="mb-2 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200"
        {...props}
      />
    ),
    hr: (props) => (
      <div
        {...props}
        className="my-8 h-px w-full bg-slate-400 dark:bg-default-100"
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
        className="text-md mb-2 leading-6 [&:before]:mr-6 [&:before]:content-['-']"
        {...props}
      />
    ),
    ol: (props) => (
      <ul
        className="mb-5 ml-5 mt-2 list-decimal [&>li:before]:mr-4 [&>li:before]:content-['']"
        {...props}
      />
    ),
    p: (props) => (
      <p className="text-md my-5 font-normal leading-7" {...props} />
    ),
    pre: (props) => {
      return (
        <Snippet size="sm" hideSymbol className="my-10 flex w-full">
          <span className="flex whitespace-pre-wrap p-7 text-sm leading-6">
            {props.children}
          </span>
        </Snippet>
      )
    },
    ul: (props) => (
      <ul className="my-5 list-none [blockquote_&]:my-0" {...props} />
    ),
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
