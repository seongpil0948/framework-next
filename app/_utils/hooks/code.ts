import { paths } from '@/schema'
import useSWR from 'swr'
import { paramToQuery } from '../common'
import { fetcherJson } from '../fetch'

type TCMCodeGet = paths['/codes']['get']
type TCmCodeGetResp =
  {
    // FIXME(sp): 백엔드 스웨거 수정 필요 
    body: TCMCodeGet['responses']['200']['content']['application/json']
  }
type TCMCodeGetQuery = TCMCodeGet['parameters']['query']
interface ICommonCodeProps {
  params: TCMCodeGetQuery
}

export default function useCommonCode({ params }: ICommonCodeProps) {
  const url = paramToQuery(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes`,
    params,
  )
  return useSWR<TCmCodeGetResp>(url.href, fetcherJson, {
    keepPreviousData: true,
    errorRetryCount: 3,
  })
}
