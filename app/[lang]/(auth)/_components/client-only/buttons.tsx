'use client'
import { useUserCtx } from '@/app/_providers/user'
import { RouteButton } from '@/app/_components/client-only/buttons'
import { Button, ButtonProps } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import useFetcher from '@/app/_utils/hooks/fetch'

function LogoutButton() {
  const router = useRouter()
  const { fetcher } = useFetcher()
  return (
    <Button
      onPress={async () => {
        await fetcher(`${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/logout`)
        router.push('/signin')
      }}
    >
      SignOut
    </Button>
  )
}

const LoginButton = () => <RouteButton href="/signin">Sign In</RouteButton>

export const SignUpToButton = (props: ButtonProps) => (
  <RouteButton {...props} href="/signUp">
    Sign Up
  </RouteButton>
)
export function AuthButton() {
  const userCtx = useUserCtx()
  if (userCtx.user) {
    return <LogoutButton />
  }
  return <LoginButton />
}
