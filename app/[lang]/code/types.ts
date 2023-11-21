import { paths } from '@/schema'

export type TDetailCommonCodeResp = {
  // FIXME(sp): 백엔드 스웨거 수정 필요
  body: TDetailCommonCode
}
export type TDetailCommonCode =
  paths['/codes/{codeGroup}/{code}']['get']['responses']['200']['content']['application/json']
