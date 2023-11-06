'use client'

import { cn } from '@/common/utils/cn'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

export function FooterBase({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [textColor, setTextColor] = useState<string>('text-white')

  useEffect(() => {
    if (pathname === '/o-que-fazemos' || pathname === '/en/o-que-fazemos') {
      setTextColor('tet-black')
    }
  }, [pathname])

  return (
    <footer
      className={cn(
        'relative flex min-h-screen w-full flex-col justify-between gap-12 bg-black px-6 py-10 text-white sm:gap-0 sm:px-16'
      )}
    >
      {children}
    </footer>
  )
}
