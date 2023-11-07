export const CONFIG_VIDEO = {
  maxFileSize: 3 * 1024 * 1024 * 1024, // 3GB
  // maxFileSize: 100 * 1024 * 1024, // 100MB
  acceptVideoFileType: { 'video/*': [] as string[] },
}
export const BREAK_POINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1280,
}
export const LANDING_PATH = '/home'

export type TAvailLocale = 'en' | 'ko'
export const AVAIL_LOCALES: TAvailLocale[] = ['en', 'ko']
export const isAvailableLocale = (locale: string): locale is TAvailLocale => {
  return AVAIL_LOCALES.includes(locale as TAvailLocale)
}
export const i18n = Object.freeze({
  defaultLocale: 'en' as TAvailLocale,
  locales: AVAIL_LOCALES,
})
