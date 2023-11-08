'use client'
import useMediaQuery from '@/hooks/useMediaQuery'
import eFazEFala from '@/images/svg/eFazEFala.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Menu from '../Menu'

const pathImages: {
  [x: string]: {
    mobile: string
    desktop: string
    showText?: boolean
    invert?: boolean
  }
} = {
  '/': {
    mobile: 'background-orange-mobile.png',
    desktop: 'background-orange.png',
    showText: true
  },
  '/o-que-fazemos': {
    mobile: 'background-black-mobile.png',
    desktop: 'background-black.png'
  },
  '/quem-somos': {
    mobile: 'background-white-mobile.png',
    desktop: 'background-white.png',
    invert: true
  }
}

const DynamicHeader = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const path: keyof typeof pathImages = usePathname() as any
  const pathData = pathImages[path]
  const pathName = usePathname()
  return (
    <>
      {pathName !== '/cases' ? (
        <>
          <Image
            src={`/images/home/${pathData[isMobile ? 'mobile' : 'desktop']}`}
            className="absolute top-0 h-full w-full object-cover"
            alt="Background of Ana Couto"
            quality={100}
            fill
          />

          <Menu invertColor={pathData.invert} />
          <Link href={'/'} scroll={false}>
            <Image
              src={'/images/logo.png'}
              alt={'Imagem da logo'}
              className="absolute top-16 z-10 cursor-pointer"
              height={100}
              width={100}
              {...(pathData.invert && { style: { filter: 'invert(100%)' } })}
            />
          </Link>

          <Image
            src={'arrowdown.svg'}
            alt={'Imagem de uma seta'}
            className="absolute bottom-20 right-6 z-10 w-4 sm:right-16 sm:w-6"
            width={24}
            height={24}
            {...(pathData.invert && { style: { filter: 'invert(100%)' } })}
          />

          {pathData.showText && (
            <div className="absolute top-28 z-10 sm:bottom-20 sm:top-auto">
              <Image
                property="true"
                src={eFazEFala}
                alt="Tipografia: É Faz E Fala"
                style={{ height: 'auto', width: '45%' }}
              />
            </div>
          )}
        </>
      ) : (
        <Menu />
      )}
    </>
  )
}

export default DynamicHeader
