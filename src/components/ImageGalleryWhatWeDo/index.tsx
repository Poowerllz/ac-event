'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import { useEffect, useState } from 'react'
import { ImageGalleryWhatWeDoDesktop } from './desktop'
import { ImageGalleryWhatWeDoProps } from './imageGalleryWhatWeDo'
import { ImageGalleryWhatWeDoMobile } from './mobile'

export function ImageGalleryWhatWeDo({
  images,
  text
}: ImageGalleryWhatWeDoProps) {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const [isMobileView, setIsMobileView] = useState<boolean>(isMobile)

  useEffect(() => {
    setIsMobileView(isMobile)
  }, [isMobile])

  return isMobileView ? (
    <ImageGalleryWhatWeDoMobile images={images} />
  ) : (
    <ImageGalleryWhatWeDoDesktop images={images} />
  )
}