'use client'

import { useRouter, usePathname } from 'next/navigation'
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { ContextUndefined } from '../_utils'
import { toast } from 'react-toastify'
import useFetcher from '../_utils/hooks/fetch'
import { paths } from '@/schema'
import { NotNullable } from '@/types'

type TSessionResp = paths['/common/session']['get']['responses']
type TSessionData = TSessionResp['200']['content']['application/json']
type TSessionRespWrapper = Omit<
  TSessionResp['default']['content']['application/json'],
  'body'
> & {
  body: TSessionData
}
type TUser = NotNullable<TSessionData> | null
type TSetUser = (value: TUser) => void

type UserContextType = {
  user: TUser
  setUser: TSetUser
  fetchSession: () => Promise<void>
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export default function UserProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<NotNullable<TSessionData> | null>(null)
  const path = usePathname()
  const { fetcherJson } = useFetcher({
    onRedirectSignin() {
      toast.error('로그인이 필요합니다.')
      if (user) {
        setUser(null)
      }
    },
  })

  const fetchSession = useCallback(async () => {
    console.log('process.env: ', JSON.stringify(process.env))

    const resp = await fetcherJson<TSessionRespWrapper>(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_PATH}/common/session`,
      {
        cache: 'no-cache',
      },
    )
    const body = resp.body
    if (body) {
      setUser(body)
    }
  }, [fetcherJson])

  useEffect(() => {
    // if (user) return;
    if (path !== '/signin') fetchSession()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        fetchSession,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

// Custom hook that shorthands the context!
export const useUserCtx = () => {
  const ctx = useContext(UserContext)
  if (ctx === undefined) {
    throw new ContextUndefined('UserContext')
  }
  return ctx
}
