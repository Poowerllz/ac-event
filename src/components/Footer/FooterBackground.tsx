'use client'

import { shimmer } from '@/common/utils/shimmer'
import { toBase64 } from '@/common/utils/toBase64'
// eslint-disable-next-line import/no-unresolved
import BgCaseInternal from '@/images/png/caseInternal.png'
// eslint-disable-next-line import/no-unresolved
import BgHome from '@/images/png/home.png'
// eslint-disable-next-line import/no-unresolved
import BgWhatWeDo from '@/images/png/whatWeDo.png'
// eslint-disable-next-line import/no-unresolved
import BgWhoWeAre from '@/images/png/whoWeAre.png'
import Image, { StaticImageData } from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PageBackgroundsProps } from './footer'

const pageBackgroundsPtBr: PageBackgroundsProps = {
  '/': BgHome,
  '/quem-somos': BgWhoWeAre,
  '/o-que-fazemos': BgWhatWeDo,
  '/case-internal': BgCaseInternal
}

const pageBackgroundsEn: PageBackgroundsProps = {
  '/en': BgHome,
  '/en/quem-somos': BgWhoWeAre,
  '/en/o-que-fazemos': BgWhatWeDo,
  '/en/case-internal': BgCaseInternal
}

export function FooterBackground() {
  const pathname = usePathname()

  const pageBackgrounds = pathname.startsWith('/en')
    ? pageBackgroundsEn
    : pageBackgroundsPtBr

  const [background, setBackground] = useState<StaticImageData | string>(
    pageBackgrounds[pathname]
  )

  useEffect(() => {
    setBackground(pageBackgrounds[pathname] || '')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <Image
      src={background}
      alt="Background do footer"
      fill
      className="bg-cover opacity-80"
      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
    />
  )
}
