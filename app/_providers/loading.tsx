import { LoadingComponent } from '@/app/_components/server-only/suspense'
import { useAppSelector } from '../_store'

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const isLoading = useAppSelector((state) => state.common.loading)

  if (isLoading)
    return (
      <>
        <LoadingComponent />
        {children}
      </>
    )
  return <> {children}</>
}
