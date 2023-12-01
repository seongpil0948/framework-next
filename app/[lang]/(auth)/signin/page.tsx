import CmTitle from '@/app/_components/server-only/title'
import { LoginForm } from '../_components/client-only/form'
import { AVAIL_LOCALES, TAvailLocale } from '@/config/system'
import { getDictionary } from '@/app/[lang]/dictionaries'

export async function generateStaticParams() {
  return AVAIL_LOCALES.map((lang) => ({ lang }))
}

interface Param {
  params: { lang: TAvailLocale }
}

export default async function SSGPage({ params: { lang } }: Param) {
  const dict = await getDictionary(lang)
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="inline-block max-w-lg justify-center text-center">
        <CmTitle>{dict['login']['signIn']}&nbsp;</CmTitle>
        <CmTitle>{dict['manifest']['title']} &nbsp;</CmTitle>
        <h3>{dict['login']['signIn']}</h3>
      </div>
      <LoginForm />
    </section>
  )
}
