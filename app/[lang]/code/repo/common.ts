import { fetcher } from '@/app/_utils/fetch'
import { paths } from '@/schema'

type TCMCodePost = paths['/codes']['post']
type TCMCodePut = paths['/codes/{codeGroup}/{code}']['put']

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/codes`
const repoCommonCode = {
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

export default repoCommonCode
