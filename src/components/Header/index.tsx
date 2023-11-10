'use client'

import { usePathname } from 'next/navigation'
import DynamicHeader from './DynamicHeader'
import { MenuLogo } from './MenuLogo'
import { pathVideoEn, pathVideoPtBr } from './common'

export default function Header() {
  const rawPath = usePathname()
  const pathSegments = rawPath.split('/')

  const shouldModifyPath = pathSegments.length > 2
  const path = shouldModifyPath ? `/${pathSegments[1]}/` : rawPath

  const pathData = pathVideoPtBr[path] ?? pathVideoEn[path]

  if (pathData.hasBackgroundColor) {
    return <MenuLogo bgColor={pathData.color || ''} />
  }

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-primary">
      <video
        loop
        muted
        autoPlay
        width="100%"
        height="100%"
        className="absolute h-full w-full object-cover"
      >
        <source src={pathData.src} type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>

      {/*  do logic to hide background */}
      <div className="absolute z-30 h-[46vw] w-[46vw] rounded-full" />
      <div className="relative h-full w-full px-6 sm:px-16">
        <DynamicHeader />
      </div>
    </div>
  )
}
