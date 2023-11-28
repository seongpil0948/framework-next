import { AVAIL_LOCALES, TAvailLocale } from '@/config/system'
import { getDictionary } from '../dictionaries'
import { LoadingSuspense } from '@/app/_components/server-only/suspense'
import CodeController from './_components/client-only/code-controller'
import CmTitle from '@/app/_components/server-only/title'
import CmSearch from '@/app/_components/server-only/search'
import CmSelect from '@/app/_components/client-only/select'
import CmInput from '@/app/_components/server-only/input'
import { ReduxCodeProvider } from './store/provider'

export async function generateStaticParams() {
  return AVAIL_LOCALES.map((lang) => ({ lang }))
}

interface Param {
  params: { lang: TAvailLocale }
}

export default async function SSGPage({ params: { lang } }: Param) {
  const dict = await getDictionary(lang)
  const searchItem = [
    { id: 'id1', value: 'value1', title: 'Title 1' },
    { id: 'id2', value: 'value2', title: 'Title 2' },
  ]
  return (
    <div>
      <CmTitle>{dict['code']['title']}</CmTitle>
      <CmSearch>
        <CmSelect
          label={dict['search']['searchCriteria']}
          labelPlacement="outside-left"
          selectItem={searchItem}
          className="w-xs [&>div]:flex-1"
        />
        <CmInput
          label={dict['search']['searchWord']}
          labelPlacement="outside-left"
          className="[&>div]:w-full [&>div]:flex-1"
        />
      </CmSearch>
      <ReduxCodeProvider>
        <CodeController />
      </ReduxCodeProvider>
      {/* <p>{typeof window === 'undefined' ? 'server' : 'client'} component</p> */}
    </div>
  )
}
