import NextLink from 'next/link'
import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/app/_components/server-only/primitives'
import { GithubIcon } from '@/app/_components/server-only/icons'
import { AuthButton } from '../(auth)/_components/client-only/buttons'
import { UserProfile } from '../(auth)/_components/client-only/profile'
import { AVAIL_LOCALES, TAvailLocale } from '@/config/system'
import { getDictionary } from '../dictionaries'
import CmButton from '@/app/_components/server-only/button'

export async function generateStaticParams() {
  return AVAIL_LOCALES.map((lang) => ({ lang }))
}

interface Param {
  params: { lang: TAvailLocale }
}

export default async function SSGPage({ params: { lang } }: Param) {
  const dict = await getDictionary(lang)
  const storyComp = () => <CmButton>button</CmButton>
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: 'violet' })}>
          {dict['home']['description']['title']}&nbsp;
        </h1>
        <br />
        <h2 className={subtitle({ class: 'mt-4' })}>
          {dict['home']['description']['summary']}
        </h2>
      </div>

      <div className="flex gap-3">
        {storyComp()}
        {/* <Link
          href="/signin"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Login
        </Link> */}
        <AuthButton />
        <Link
          isExternal
          as={NextLink}
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow',
          })}
        >
          Documentation
        </Link>
        <Link
          isExternal
          as={NextLink}
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <UserProfile />
      </div>
    </section>
  )
}
