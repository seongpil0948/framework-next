// import 'server-only'
'use server'
// localePath:
// typeof window === 'undefined'
//   ? require('path').resolve('./my-custom/path')
//   : '/public/my-custom/path',
import { i18n, isAvailableLocale } from '@/config/system'

const dictionaries = Object.freeze({
  en: () => import('@/locales/en.json').then((module) => module.default),
  ko: () => import('@/locales/ko.json').then((module) => module.default),
})

// auth/invalid-login-credentials
export const getDictionary = async (locale: string) => {
  console.info('===> getDictionary ===> ', locale)
  return dictionaries[isAvailableLocale(locale) ? locale : i18n.defaultLocale]()
}

export type TDict = typeof dictionaries
export type TLocale = keyof TDict
export type TDictVal = TDict[TLocale] extends () => Promise<infer R> ? R : never
