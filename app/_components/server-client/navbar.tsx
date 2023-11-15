import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import clsx from 'clsx'

import { ThemeSwitch } from '@/app/_components/client-only/theme-switch'
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
} from '@/app/_components/server-only/icons'

import { Logo } from '@/app/_components/server-only/icons'
import { THrefLinks } from '@/types'
import { SearchInput } from '../client-only/input/search'

export default function CommonNavbar(props: {
  navItems: THrefLinks
  children?: React.ReactNode
  prefix?: React.ReactNode
  landingPath: string
  links?: {
    twitter?: string
    discord?: string
    github?: string
    sponsor?: string
  }
}) {
  const { navItems, children, prefix, landingPath, links } = props
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {prefix && prefix}
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href={landingPath}
          >
            <Logo />
            <p className="font-bold text-inherit">Abacus</p>
          </NextLink>
        </NavbarBrand>
        <ThemeSwitch />

        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium',
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        {children}
      </NavbarContent>

      <NavbarContent
        // className="hidden sm:flex basis-1/5 sm:basis-full"
        className="flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {links && (
          <NavbarItem className="hidden sm:flex gap-2">
            {links.twitter && (
              <Link isExternal href={links.twitter} aria-label="Twitter">
                <TwitterIcon className="text-default-500" />
              </Link>
            )}
            {links.discord && (
              <Link isExternal href={links.discord} aria-label="Discord">
                <DiscordIcon className="text-default-500" />
              </Link>
            )}
            {links.github && (
              <Link isExternal href={links.github} aria-label="Github">
                <GithubIcon className="text-default-500" />
              </Link>
            )}
          </NavbarItem>
        )}
        <NavbarItem className="hidden lg:flex">
          <SearchInput />
        </NavbarItem>
        {links?.sponsor && (
          <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={links.sponsor}
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
            >
              Contribute
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent> */}

      {/* <NavbarMenu>
        <SearchInput />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu> */}
    </NextUINavbar>
  )
}
