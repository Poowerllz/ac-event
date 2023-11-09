'use client'

import { cn } from '@/common/utils/cn'
import { shimmer } from '@/common/utils/shimmer'
import { toBase64 } from '@/common/utils/toBase64'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { pathBackgroundEn, pathBackgroundPtBr } from './common'
import { PathDataProps } from './footer'

export function FooterBackground() {
  const path = usePathname()
  const pathData: PathDataProps =
    pathBackgroundPtBr[path] ?? pathBackgroundEn[path]

  if (!pathData.isImage) {
    return <div className={cn('absolute h-full w-full', pathData.color)} />
  }

  return (
    <Image
      src={pathData.src as string}
      alt="Background do footer"
      fill
      className="bg-cover opacity-80"
      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
    />
  )
}
