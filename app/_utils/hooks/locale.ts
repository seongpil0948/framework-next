import { type TDictVal } from '@/app/[lang]/dictionaries'
import { useCommonCtx } from '@/app/_providers/common'
import { useEffect, useState } from 'react'

export function useDictionary() {
  const [dictionary, setDictionary] = useState<TDictVal | undefined>()
  const { clientLocale } = useCommonCtx()

  useEffect(() => {
    import(`@/locales/${clientLocale}.json`).then((module) => {
      setDictionary(module.default)
    })
  })

  return dictionary
}

export function useDict(keys: string[]) {
  const dict = useDictionary()
  let value: any = dict
  for (let key of keys) {
    value = value && value[key]
  }
  return value
}
