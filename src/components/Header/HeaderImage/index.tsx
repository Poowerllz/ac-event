'use client'
import useMediaQuery from '@/hooks/useMediaQuery'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import React from 'react'

const pathImages = {
  '/': {
    mobile: 'background-orange-mobile.png',
    desktop: 'background-orange.png'
  },
  '/o-que-fazemos': {
    mobile: 'background-black-mobile.png',
    desktop: 'background-black.png'
  },
  '/quem-somos': {
    mobile: 'background-white-mobile.png',
    desktop: 'background-white.png'
  }
}

const HeaderImage = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const path: keyof typeof pathImages = usePathname() as any

  return (
    <Image
      src={`/images/home/${pathImages[path][isMobile ? 'mobile' : 'desktop']}`}
      className="absolute top-0 h-full w-full object-cover"
      alt="Background of Ana Couto"
      quality={100}
      fill
    />
  )
}

export default HeaderImage
