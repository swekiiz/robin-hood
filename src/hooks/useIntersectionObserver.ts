import { useCallback, useEffect, useRef } from 'react'

export const useIntersactionObserver = (
  isPausing: boolean,
  callback: Function,
  dependency: any[] = [],
): ((node: any) => void) => {
  const observer = useRef<IntersectionObserver | null>(null)

  const observeNode = useCallback(
    (node: any) => {
      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isPausing) {
          callback()
        }
      })

      if (node) {
        observer.current.observe(node)
      }
    },
    [isPausing, callback, ...dependency],
  )

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [])

  return observeNode
}
