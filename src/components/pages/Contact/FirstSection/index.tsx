'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import { useEffect, useState } from 'react'
import { FirstSectionDesktop } from './desktop'
import { FirstSectionMobile } from './mobile'
import { FirstSectionProps } from './types'

export function FirstSectionContact({
  address,
  copyright,
  social,
  title
}: FirstSectionProps) {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const [isMobileView, setIsMobileView] = useState<boolean>(isMobile)

  useEffect(() => {
    setIsMobileView(isMobile)
  }, [isMobile])

  return isMobileView ? (
    <FirstSectionMobile
      title={title}
      address={address}
      social={social}
      copyright={copyright}
    />
  ) : (
    <FirstSectionDesktop
      title={title}
      address={address}
      social={social}
      copyright={copyright}
    />
  )
}
