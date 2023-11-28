import { FetchApiError } from '../exceptions'
import { ErrorProps, useError } from './error'

const getUri = (input: RequestInfo) =>
  typeof input === 'string' ? input : input.url
export type FetcherType = typeof fetcher
export type FetcherJsonType = typeof fetcherJson

async function fetcherJson<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetcher(input, init)
  if (res.ok) return res.json()
  throw new FetchApiError({
    status: res.status,
    statusText: res.statusText,
    url: getUri(input),
  })
}

async function fetcher(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, {
    ...init,
    credentials: 'include',
  })
  if (res.ok) {
    return res
  }
  throw new FetchApiError({
    status: res.status,
    statusText: res.statusText,
    url: getUri(input),
  })
}

export default function useFetcher(errorProps?: ErrorProps) {
  const { handleError } = useError(errorProps)
  const fetcherWrapper = async (input: RequestInfo, init?: RequestInit) => {
    try {
      const response = await fetcher(input, init)
      return response
    } catch (error) {
      handleError(error)
      throw error
    }
  }

  const fetcherJsonWrapper = async <JSON = any>(
    input: RequestInfo,
    init?: RequestInit,
  ) => {
    try {
      const json = await fetcherJson<JSON>(input, init)
      return json
    } catch (error) {
      handleError(error)
      throw error
    }
  }

  return { fetcher: fetcherWrapper, fetcherJson: fetcherJsonWrapper }
}
