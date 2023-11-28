import { paths } from '@/schema'
import useSWR, { SWRConfiguration } from 'swr'
import { paramToQuery } from '../../../_utils/common'
import { IApiWrapper } from '@/types/api'
import useFetcher from '@/app/_utils/hooks/fetch'

type TCMCodePost = paths['/codes']['post']
type TCMCodePut = paths['/codes/{codeGroup}/{code}']['put']
type TCMCodeGet = paths['/codes']['get']
type TCmCodeGetResp = IApiWrapper<
  TCMCodeGet['responses']['200']['content']['application/json']
>
type TCMCodeGetQuery = TCMCodeGet['parameters']['query']
const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes`

interface ICommonCodeProps {
  params: TCMCodeGetQuery
  disable?: boolean
  config?: SWRConfiguration
}

export function useCommonCodeSwr({
  params,
  disable,
  config,
}: ICommonCodeProps) {
  const url = paramToQuery(BASE_URL, params)
  const { fetcherJson } = useFetcher()
  return useSWR<TCmCodeGetResp>(disable ? null : url.href, fetcherJson, {
    keepPreviousData: true,
    errorRetryCount: 3,
    ...config,
  })
}

export function useCommonCode() {
  const { fetcher } = useFetcher()
  return {
    post: async (
      payload: TCMCodePost['requestBody']['content']['application/json'],
    ) => {
      const response = await fetcher(BASE_URL, {
        method: 'POST',
        // headers: {
        //   Authorization: `Bearer ${await userCredential.user.getIdToken()}`,
        // },
        body: JSON.stringify(payload),
      })
      return response.ok
    },
    put: async (
      groupCode: string,
      code: string,
      payload: TCMCodePut['requestBody']['content']['application/json'],
    ) => {
      const response = await fetcher(`${BASE_URL}/${groupCode}/${code}`, {
        method: 'PUT',
        body: JSON.stringify({
          codeName: payload.codeName,
          codeValue: payload.codeValue,
          codeDescription: payload.codeDescription,
          codeIndex: payload.codeIndex,
          useYn: payload.useYn,
        }),
      })
      return response.ok
    },
  }
}
