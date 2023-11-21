'use client'

import { Provider } from 'react-redux'
import { codeStore } from './store'

export function ReduxCodeProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={codeStore}>{children}</Provider>
}
