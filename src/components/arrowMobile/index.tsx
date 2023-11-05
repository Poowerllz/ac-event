'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'

interface arrowProps {
  name: string
}
export const ArrowMobile = ({ name }: arrowProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {isMobile ? (
        <>
          <Image
            src={`${name}.svg`}
            alt={'Imagem de uma seta'}
            width={12}
            height={25}
          />
        </>
      ) : (
        <>
          <Image
            src={`${name}.svg`}
            alt={'Imagem de uma seta'}
            width={22}
            height={50}
          />
        </>
      )}
    </>
  )
}
