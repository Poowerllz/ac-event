'use client'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import React from 'react'

const HeaderImage = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <Image
      src={`/images/home/${
        isMobile ? 'background-orange-mobile.png' : 'background-orange.png'
      }`}
      className="absolute top-0 h-full w-full object-cover"
      alt="Background of Ana Couto"
      quality={100}
      fill
    />
  )
}

export default HeaderImage
