import { title } from '@/app/_components/server-only/primitives'
import { AVAIL_LOCALES, TAvailLocale } from '@/config/system'
import { getDictionary } from '../dictionaries'
import { LoadingSuspense } from '@/app/_components/server-only/suspense'
import CodeController from './_components/client-only/code-controller'

export async function generateStaticParams() {
  return AVAIL_LOCALES.map((lang) => ({ lang }))
}

interface Param {
  params: { lang: TAvailLocale }
}

export default async function SSGPage({ params: { lang } }: Param) {
  const dict = await getDictionary(lang)
  return (
    <div>
      <h1 className={title()}>{dict['code']['title']}</h1>
      <p>{typeof window === 'undefined' ? 'server' : 'client'} component</p>
      <LoadingSuspense>
        <CodeController />
      </LoadingSuspense>
    </div>
  )
}
