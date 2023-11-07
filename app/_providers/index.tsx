'use client'

import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { ReduxProvider } from '../_store'
import { LoadingProvider } from './loading'
import { ToastContainer } from 'react-toastify'
import UserProvider from './user'
import { useEffect } from 'react'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const { theme } = useTheme()

  useEffect(() => {
    console.log('theme: ', theme)
  }, [theme])
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
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
      </NextThemesProvider>
    </NextUIProvider>
  )
}
