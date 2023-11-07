import { CircularProgress, CircularProgressProps } from '@nextui-org/progress'
import { Suspense } from 'react'

export function LoadingComponent(props: CircularProgressProps) {
  return (
    <CircularProgress
      key="7"
      className="fixed top-1/2 left-1/2"
      size="lg"
      aria-label="Loading..."
      {...props}
    />
  )
}

export function LoadingSuspense({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingComponent />}>{children}</Suspense>
}
