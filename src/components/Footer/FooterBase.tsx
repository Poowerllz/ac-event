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
        'relative flex w-full flex-col gap-10 bg-black px-6 py-10 sm:gap-80 sm:px-16',
        textColor
      )}
    >
      {children}
    </footer>
  )
}
