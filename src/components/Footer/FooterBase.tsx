'use client'

import { cn } from '@/common/utils/cn'
import { getPathData } from '@/common/utils/getPathData'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { colorTextEn, colorTextPtBr } from './common'
import { ColorTextBackground } from './footer'

export function FooterBase({ children }: { children: ReactNode }) {
  const rawPath: string = usePathname()
  const pathData: ColorTextBackground = getPathData(
    rawPath,
    colorTextPtBr,
    colorTextEn
  )

  return (
    <footer
      className={cn(
        'relative flex min-h-screen w-full flex-col justify-between gap-12 bg-black text-white sm:gap-0',
        pathData?.styles?.color,
        pathData?.styles?.minHeight && pathData?.styles?.minHeight
      )}
    >
      {children}
    </footer>
  )
}
