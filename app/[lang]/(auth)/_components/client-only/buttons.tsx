'use client'
import { useUserCtx } from '@/app/_providers/user'
import { RouteButton } from '@/app/_components/client-only/buttons'
import { Button, ButtonProps } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import { fetcher } from '@/app/_utils/fetch'
import { useDictionary } from '@/app/_utils/hooks/locale'

function LogoutButton() {
  const dict = useDictionary()
  const router = useRouter()
  if (!dict) {
    return null
  }
  return (
    <Button
      onPress={async () => {
        await fetcher(`${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/logout`)
        router.push('/signin')
      }}
    >
      {dict['login']['signOut']}
    </Button>
  )
}

const LoginButton = () => {
  const dict = useDictionary()
  if (!dict) {
    return null
  }
  return <RouteButton href="/signin">{dict['login']['signIn']}</RouteButton>
}

export const SignUpToButton = (props: ButtonProps) => {
  const dict = useDictionary()
  if (!dict) {
    return null
  }
  return (
    <RouteButton {...props} href="/signUp">
      {dict['login']['signIn']}
    </RouteButton>
  )
}

export function AuthButton() {
  const userCtx = useUserCtx()
  if (userCtx.user) {
    return <LogoutButton />
  }
  return <LoginButton />
}
