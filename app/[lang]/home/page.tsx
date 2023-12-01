import NextLink from 'next/link'
import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '@/config/site'
import CmTitle from '@/app/_components/server-only/title'
import { GithubIcon } from '@/app/_components/server-only/icons'
import { AuthButton } from '../(auth)/_components/client-only/buttons'
import { UserProfile } from '../(auth)/_components/client-only/profile'
import { AVAIL_LOCALES, TAvailLocale } from '@/config/system'
import { getDictionary } from '../dictionaries'
import CmButton from '@/app/_components/server-only/button'
import HiButton from '@/app/_components/client-only/three-d/intro-button'

export async function generateStaticParams() {
  return AVAIL_LOCALES.map((lang) => ({ lang }))
}

interface Param {
  params: { lang: TAvailLocale }
}

export default async function SSGPage({ params: { lang } }: Param) {
  const dict = await getDictionary(lang)
  const storyComp = () => <CmButton>{dict['button']['button']}</CmButton>
  return (
    <section className="flex-center-col">
      <div className="inline-block justify-center text-center">
        <div className="flex-center-col">
          <CmTitle className="m-auto" size="lg">
            {dict['home']['teamName']}
          </CmTitle>
          <CmTitle size="lg" gradient>
            {dict['home']['description']['title']}&nbsp;
          </CmTitle>
        </div>
        <p className="mb-12 mt-6 max-w-6xl text-xl text-default-500">
          {dict['home']['description']['summary1']}
          <br />
          {dict['home']['description']['summary2']}
          <br />
          {dict['home']['description']['summary3']}
        </p>
      </div>
      <HiButton />

      {/* {storyComp()} */}
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
      {/* <AuthButton />
        <Link
          as={NextLink}
          href={`/doc/getting-started`}
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow',
          })}
        >
          {dict['button']['started']}
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
        <UserProfile /> */}
    </section>
  )
}
