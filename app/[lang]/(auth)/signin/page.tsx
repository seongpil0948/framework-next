import { subtitle, title } from '@/app/_components/server-only/primitives'
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
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Login to&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>
          {dict['manifest']['title']} &nbsp;
        </h1>
        <br />
        <h2 className={subtitle({ class: 'mt-4' })}>Login</h2>
      </div>
      <LoginForm />
    </section>
  )
}
