'use client'

import { Provider } from 'react-redux'
import { rootStore } from './store'

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={rootStore}>{children}</Provider>
}
