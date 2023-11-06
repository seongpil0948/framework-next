export async function fetcherJson<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetcher(input, init);
  return res.json();
}

export async function fetcher(input: RequestInfo, init?: RequestInit) {
  let url = typeof input === "string" ? input : input.url;
  console.log("[fetching] input url: ", url);
  if (url.startsWith(process.env.NEXT_PUBLIC_BACKEND_BASE_PATH)) {
    url = process.env.NEXT_PUBLIC_BACKEND_URL + url;
    console.log("[fetching] backend url: ", url);
  }
  return fetch(input, init);
}
