'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import { useEffect, useState } from 'react'
import { ImageGalleryWhoWeAreDesktop } from './desktop'
import { ImageGalleryWhoWeAreMobile } from './mobile'
import { ImageGalleryWhoWeAreProps } from './type'

export function ImageGalleryWhoWeAre({
  images,
  text
}: ImageGalleryWhoWeAreProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMobileView, setIsMobileView] = useState<boolean>(isMobile)

  useEffect(() => {
    setIsMobileView(isMobile)
  }, [isMobile])

  return isMobileView ? (
    <ImageGalleryWhoWeAreMobile images={images} />
  ) : (
    <ImageGalleryWhoWeAreDesktop images={images} />
  )
}
