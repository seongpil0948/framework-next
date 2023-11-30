'use client'
import { useState } from 'react'
import { setLoading, useAppDispatch } from '@/app/_store'
import { Button } from '@nextui-org/button'
import { ForgetPasswordBtn } from '@/app/_components/client-only/buttons'
import {
  InputEmail,
  InputPassword,
} from '@/app/_components/client-only/input/fields'
import { toast } from 'react-toastify'
import { useRouter, useSearchParams } from 'next/navigation'
import { useUserCtx } from '@/app/_providers/user'
import useFetcher from '@/app/_utils/hooks/fetch'
import { useError } from '@/app/_utils/hooks/error'
import { useDictionary } from '@/app/_utils/hooks/locale'

export function EmailForm(p: {
  email: string
  setEmail: (s: string) => void
  password: string
  setPassword: (s: string) => void
}) {
  return (
    <form>
      <InputEmail {...p} />
      <InputPassword {...p} />
    </form>
  )
}

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()
  const router = useRouter()
  const param = useSearchParams()
  const dict = useDictionary()
  const { fetchSession } = useUserCtx()
  const { fetcherJson } = useFetcher()
  const { handleError } = useError({
    onParseError(payload) {
      toast.error(payload.title + ' ' + payload.message)
    },
  })

  const pushNextPage = () => {
    const redirectTo = param.get('redirectTo')
    if (redirectTo) {
      return router.push(redirectTo)
    }
    router.push('/')
  }

  const signIn = () => {
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort('timeout'), 3000)
    try {
      return fetcherJson(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/login?info1=admin&info2=U2FsdGVkX1%2FW9xtgxK5iaWm6Wsbmi5y1PoUf2WP5SSk%3D`,
        {
          method: 'POST',
          signal: controller.signal,
        },
      )
    } finally {
      clearTimeout(id)
    }
  }

  const handleSignIn = async () => {
    dispatch(setLoading(true))
    try {
      await signIn()
      await fetchSession()
      pushNextPage()
    } catch (e) {
      handleError(e)
    } finally {
      dispatch(setLoading(false))
    }
  }
  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') handleSignIn()
  }
  return (
    <div onKeyUp={handleKeyUp} className="flex flex-col gap-3">
      <EmailForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <ForgetPasswordBtn />
      <Button className="flex-1 py-2" color="primary" onPress={handleSignIn}>
        {dict && dict['login']['signIn']}
      </Button>
    </div>
  )
}
