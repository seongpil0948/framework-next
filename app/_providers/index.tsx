'use client'

import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { ReduxProvider } from '../_store'
import { LoadingProvider } from './loading'
import { ToastContainer } from 'react-toastify'
import UserProvider from './user'
import { useEffect } from 'react'
import { I18nProvider } from 'react-aria'
import { useRouter } from 'next/navigation'
import CommonProvider from './common'
// import { ErrorBoundary } from '../_utils/exceptions'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const { theme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    console.log('theme: ', theme)
  }, [theme])
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {/* <ErrorBoundary fallback={VideoFallback} onError={onVideoError}> */}
        {/* Fixme as user locale */}
        <I18nProvider locale="ko">
          <CommonProvider>
            <UserProvider>
              <ReduxProvider>
                <LoadingProvider>
                  {children}
                  <ToastContainer
                    position="top-right"
                    autoClose={false}
                    pauseOnHover={false}
                    hideProgressBar={false}
                    theme={theme === 'dark' ? 'dark' : 'light'}
                    newestOnTop={false}
                    rtl={false}
                  />
                </LoadingProvider>
              </ReduxProvider>
            </UserProvider>
          </CommonProvider>
        </I18nProvider>
        {/* </ErrorBoundary> */}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
