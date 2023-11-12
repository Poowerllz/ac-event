'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import { useEffect, useState } from 'react'
import { ImageGalleryExecutiveTeamDesktop } from './desktop'
import { ImageGalleryExecutiveTeamMobile } from './mobile'

export function ImageGalleryExecutiveTeam() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const [isMobileView, setIsMobileView] = useState<boolean>(isMobile)

  useEffect(() => {
    setIsMobileView(isMobile)
  }, [isMobile])

  return isMobileView ? (
    <ImageGalleryExecutiveTeamMobile />
  ) : (
    <ImageGalleryExecutiveTeamDesktop />
  )
}
