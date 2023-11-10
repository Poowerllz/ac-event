'use client'

import { cn } from '@/common/utils/cn'
import { ReactNode } from 'react'

export function FooterBase({ children }: { children: ReactNode }) {
  return (
    <footer
      className={cn(
        'relative flex min-h-screen w-full flex-col justify-between gap-12 bg-black text-white sm:gap-0'
      )}
    >
      {children}
    </footer>
  )
}
