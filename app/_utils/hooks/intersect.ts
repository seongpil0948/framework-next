import { useRef, useCallback, useEffect } from 'react'

// [코드 11] IntersectionObserver custom hook
type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
) => void

export function useIntersect(
  onIntersect: IntersectHandler,
  options?: IntersectionObserverInit,
) {
  const ref = useRef<HTMLDivElement>(null)
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      console.log('entries onIntersect : ', entries)
      entries.forEach((entry) => {
        if (entry.isIntersecting) return onIntersect(entry, observer)
      })
    },
    [onIntersect],
  )

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(callback, options)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options, callback])

  return ref
}
