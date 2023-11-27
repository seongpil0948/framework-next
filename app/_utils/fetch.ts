import { FetchApiError } from './exceptions'

export async function fetcherJson<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetcher(input, init)
  return res.json()
}

export async function fetcher(input: RequestInfo, init?: RequestInit) {
  const isStr = typeof input === 'string'
  let url = isStr ? input : input.url
  console.log('[fetching] input url: ', url)

  // if (
  //   url.startsWith(process.env.NEXT_PUBLIC_BACKEND_BASE_PATH) &&
  //   process.env.NEXT_PUBLIC_ENV !== "local"
  // ) {
  //   url = process.env.NEXT_PUBLIC_BACKEND_URL + url;
  //   console.log("[fetching] backend url: ", url);
  // }
  const res = await fetch(isStr ? url : { ...input, url }, {
    ...init,
    credentials: 'include',
  })
  if (res.ok) {
    return res
  }
  throw new FetchApiError({
    status: res.status,
    statusText: res.statusText,
    url: url,
  })
}
