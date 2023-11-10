'use client'

import { cn } from '@/common/utils/cn'
import { getPathData } from '@/common/utils/getPathData'
import { shimmer } from '@/common/utils/shimmer'
import { toBase64 } from '@/common/utils/toBase64'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { pathBackgroundEn, pathBackgroundPtBr } from './common'

export function FooterBackground() {
  const rawPath: string = usePathname()
  const pathData = getPathData(rawPath, pathBackgroundPtBr, pathBackgroundEn)

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
