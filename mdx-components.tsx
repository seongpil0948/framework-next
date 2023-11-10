import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { parseNumber } from './app/_utils'
import { Link as NextLink } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => <Link {...props} />,
    blockquote: (props) => (
      <blockquote
        className="[&>p]:m-0 border bg-default-200/20 border-default-200 dark:border-default-100 my-6 py-3 px-4 rounded-xl"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="after:content-['`'] before:content-['`'] bg-transparent font-mono font-normal h-fit inline-block py-0 px-0 rounded-small text-sky-400 text-small whitespace-nowrap"
        {...props}
      />
    ),
    h1: (props) => (
      <h1
        className="dark:text-slate-200 font-extrabold mb-8 sm:text-4xl text-slate-900 text-3xl tracking-tight"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="dark:text-slate-200 font-bold mb-4 mt-8 text-slate-900 text-2xl tracking-tight"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="dark:text-slate-200 font-semibold mb-3 mt-8 text-slate-900 text-xl"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="dark:text-slate-200 font-semibold leading-6 mb-2 text-slate-900 text-sm"
        {...props}
      />
    ),
    hr: (props) => (
      <div
        {...props}
        className="bg-slate-900 dark:bg-default-100 h-px my-8 w-full"
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
    li: (props) => <li className="my-px" {...props} />,
    ol: (props) => <ul className="list-decimal mb-5 ml-5 mt-2" {...props} />,
    p: (props) => <p className="break-keep font-normal my-3" {...props} />,
    pre: (props) => {
      return (
        <Snippet size="sm" hideSymbol className="w-full">
          <span className="inline-flex leading-5 p-2.5 whitespace-pre-wrap">
            {props.children}
          </span>
        </Snippet>
      )
    },
    ul: (props) => (
      <ul className="[blockquote_&]:my-0 list-disc mb-5 ml-5 mt-2" {...props} />
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
