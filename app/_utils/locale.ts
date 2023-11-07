import 'server-only'
import { TAvailLocale, i18n, isAvailableLocale } from '@/config/system'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'

export function getLocaleRequest(request: NextRequest): TAvailLocale {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  // @ts-ignore locales are readonly
  const locales = i18n.locales
  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  )

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale as TAvailLocale
}

export function getLocaleBrowser() {
  const userLangs = [...navigator.languages, navigator.language]
  const locale = matchLocale(userLangs, i18n.locales, i18n.defaultLocale)
  return locale as TAvailLocale
}

export function matchLocalePath(pathname: string): TAvailLocale {
  const pattern = /\/(en|ko)\//
  const match = pathname.match(pattern)
  if (match) {
    const locale = match[1]
    if (isAvailableLocale(locale)) return locale
  }
  return i18n.defaultLocale
}

export function matchLocaleStr(input: string): TAvailLocale {
  for (let i = 0; i < i18n.locales.length; i++) {
    const locale = i18n.locales[i]
    if (input.includes(locale)) return locale
  }
  return i18n.defaultLocale
}

export async function splitLocaleAndPath(path: string) {
  'use server'
  const locale = i18n.locales.find(
    (locale) => path.startsWith(`/${locale}/`) || path === `/${locale}`,
  )
  const p = path
    .split('/')
    .filter((seg) => !(i18n.locales as string[]).includes(seg))
    .join('/')
  return Promise.resolve({ locale, path: p })
}
