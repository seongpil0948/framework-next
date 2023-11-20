import { fetcherJson } from '@/app/_utils/fetch'
import useCommonCode from '@/app/_utils/hooks/code'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import Link from 'next/link'
import { paths } from '@/schema'
import useSWR from 'swr'

type TDetailCommonCode = {
  // FIXME(sp): 백엔드 스웨거 수정 필요
  body: paths['/codes/{codeGroup}/{code}']['get']['responses']['200']['content']['application/json']
}

export default function CommonCodeDetail(props: {
  commonCode: string
  groupCode: string
}) {
  const { commonCode, groupCode } = props
  const { data } = useSWR<TDetailCommonCode>(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes/${groupCode}/${commonCode}`,
    fetcherJson,
    {
      keepPreviousData: true,
      errorRetryCount: 3,
      suspense: true,
    },
  )
  return <CodeDetail code={data} />
}

function CodeDetail(props: { code: TDetailCommonCode | undefined }) {
  const { code } = props
  if (!code || !code.body) return <p>no data</p>
  const c = code.body
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{c.codeName}</p>
          <p className="text-small text-default-500">{c.codeGroup}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{c.codeDescription}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link href="https://github.com/nextui-org/nextui">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  )
}
