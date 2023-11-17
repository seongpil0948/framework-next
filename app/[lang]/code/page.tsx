import { AVAIL_LOCALES, TAvailLocale } from '@/config/system'
import { getDictionary } from '../dictionaries'
import { LoadingSuspense } from '@/app/_components/server-only/suspense'
import CodeController from './_components/client-only/code-controller'
import CmTitle from '@/app/_components/server-only/title'
import CmSearch from '@/app/_components/server-only/search'
import {CmDropdown} from '@/app/_components/server-only/dropdown'
import CmInput from '@/app/_components/server-only/input'

export async function generateStaticParams() {
  return AVAIL_LOCALES.map((lang) => ({ lang }))
}

interface Param {
  params: { lang: TAvailLocale }
}

export default async function SSGPage({ params: { lang } }: Param) {
  const dict = await getDictionary(lang)
  const searchItem = [
      { value: 'value1', label: 'Label 1' },
      { value: 'value2', label: 'Label 2' },
    ]
  return (
    <div>
      <CmTitle>{dict['code']['title']}</CmTitle>
      <CmSearch>
          <CmDropdown label="검색 조건" labelPlacement="outside-left" dropdownItem={searchItem} className="w-xs [&>div]:flex-1" />
        <CmInput label="검색어" labelPlacement="outside-left" className="[&>div]:w-full [&>div]:flex-1"/>
      </CmSearch>
      <LoadingSuspense>
        <CodeController />
      </LoadingSuspense>
      {/* <p>{typeof window === 'undefined' ? 'server' : 'client'} component</p> */}
    </div>
  )
}
