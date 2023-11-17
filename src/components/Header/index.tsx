'use client'

import { getPathData } from '@/common/utils/getPathData'
import { usePathname } from 'next/navigation'
import DynamicHeader from './DynamicHeader'
import { MenuLogo } from './MenuLogo'
import { pathVideoEn, pathVideoPtBr } from './common'
import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function Header() {
  const rawPath: string = usePathname()
  const pathData = getPathData(rawPath, pathVideoPtBr, pathVideoEn)
  const hideButtonRef = useRef()
  const [playing, setPlaying] = useState(false)

  if (pathData.hasBackgroundColor) {
    return <MenuLogo bgColor={pathData.color || ''} />
  }

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <ReactPlayer
        url={'https://www.youtube.com/embed/uYFVJNrOt9g?si=KpthCpw7Eaqo9kgr'}
        className="absolute left-0 h-full w-full object-cover"
        controls={false}
        width={'calc(100vw + 0px)'}
        height={'calc(100vh + 120px)'}
        playing={playing}
      />
      {!playing && (
        <div
          className="absolute z-50 h-[46vw] w-[46vw] cursor-pointer rounded-full"
          onClick={() => {
            setPlaying(true)
            ;(hideButtonRef as any).current.click()
          }}
        />
      )}

      <div className="relative flex h-full w-full  px-6 sm:px-16">
        <DynamicHeader
          videoPath={pathData.src}
          hideButtonRef={hideButtonRef}
          onPause={() => setPlaying(false)}
        />
      </div>
    </div>
  )
}
