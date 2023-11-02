import { useEffect, useState } from 'react'

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    const updateMatches = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQueryList.addEventListener('change', updateMatches)

    setMatches(mediaQueryList.matches)

    return () => {
      mediaQueryList.removeEventListener('change', updateMatches)
    }
  }, [query])

  return matches
}

export default useMediaQuery
