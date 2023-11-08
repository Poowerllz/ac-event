'use client'

import { usePathname } from 'next/navigation'
import DynamicHeader from './DynamicHeader'

const pagesBr: { [key: string]: string } = {
  '/': './images/home/background.mp4',
  '/quem-somos': './images/home/background.mp4',
  '/o-que-fazemos': './images/home/background.mp4'
}

const pagesEn: { [key: string]: string } = {
  '/en': './images/home/background.mp4',
  '/en/quem-somos': './images/home/background.mp4',
  '/en/o-que-fazemos': './images/home/background.mp4'
}

export default function Header() {
  const pathname = usePathname()
  const pathData = pagesBr[pathname] ?? pagesEn[pathname]

  console.log('pathdata', pathData)

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
        <source src={pathData} type="video/mp4" />
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
