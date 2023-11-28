import { usePathname, useRouter } from 'next/navigation'
import { FetchApiError } from '../exceptions'
import { useCallback } from 'react'

interface ErrorPayload {
  title?: string
  message: string
}
export interface ErrorProps {
  onParseError?: (payload: ErrorPayload) => void
  onRedirectSignin?: () => void
}

export function useError(props?: ErrorProps) {
  const { onParseError, onRedirectSignin } = props || {}
  const router = useRouter()
  const path = usePathname()

  const handleParsedError = useCallback(
    (payload: ErrorPayload) => {
      if (onParseError) {
        onParseError(payload)
      } else {
        console.error(payload)
      }
    },
    [onParseError],
  )

  const handleError = useCallback(
    (error: unknown) => {
      if (error instanceof FetchApiError) {
        if (error.status === 401 && !path.includes('/signin')) {
          if (onRedirectSignin) onRedirectSignin()
          router.replace(`/signin?redirectTo=${path}`)
        }
        handleParsedError({ message: error.message, title: error.statusText })
      } else if (error instanceof Error) {
        handleParsedError({ message: error.message })
      }
      return handleParsedError({ message: 'An unknown error occurred' })
    },
    [handleParsedError, path, router, onRedirectSignin],
  )
  return { handleError }
}

// export async function handleModalError(dispatch: AppDispatch, error: unknown) {
//   const result = handleError(error);
//   // const dict = await getDictionary(lang)
//   console.error("===>", result, error);
//   dispatch(
//     setMsg({
//       title: result.title,
//       content: result.message,
//       type: "error",
//     })
//   );
// }
