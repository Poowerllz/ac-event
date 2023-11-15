import { RefObject, useCallback, useEffect, useState } from 'react'

export function useIsVisible(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false)

  const handleIntersection: IntersectionObserverCallback = useCallback(
    entries => {
      const [entry] = entries
      setIntersecting(entry.isIntersecting)
    },
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection)

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [handleIntersection, ref])

  return isIntersecting
}
