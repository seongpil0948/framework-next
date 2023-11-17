import { paths } from '@/schema'
import useSWR from 'swr'
import { paramToQuery } from '../common'
import { fetcherJson } from '../fetch'

type TCMCodeGet = paths['/codes']['get']
type TCmCodeGetResp =
  TCMCodeGet['responses']['200']['content']['application/json']
type TCMCodeGetParams = TCMCodeGet['parameters']
interface ICommonCodeProps {
  params: TCMCodeGetParams
}

export default function useCommonCode({ params }: ICommonCodeProps) {
  const url = paramToQuery(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes`,
    params.query,
  )
  return useSWR<TCmCodeGetResp>(url, fetcherJson, {
    keepPreviousData: true,
  })
}
