import { paths } from '@/schema'
import useSWR, { SWRConfiguration } from 'swr'
import { paramToQuery } from '../../../_utils/common'
import { fetcherJson } from '../../../_utils/fetch'
import { IApiWrapper } from '@/types/api'

type TCMCodeGet = paths['/codes']['get']
type TCmCodeGetResp = IApiWrapper<
  TCMCodeGet['responses']['200']['content']['application/json']
>
type TCMCodeGetQuery = TCMCodeGet['parameters']['query']

interface ICommonCodeProps {
  params: TCMCodeGetQuery
  disable?: boolean
  config?: SWRConfiguration
}

export default function useCommonCode({
  params,
  disable,
  config,
}: ICommonCodeProps) {
  const url = paramToQuery(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes`,
    params,
  )
  return useSWR<TCmCodeGetResp>(disable ? null : url.href, fetcherJson, {
    keepPreviousData: true,
    errorRetryCount: 3,
    ...config,
  })
}
