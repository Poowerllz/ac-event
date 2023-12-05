'use client'

import { getPathData } from '@/common/utils/getPathData'
import useMediaQuery from '@/hooks/useMediaQuery'
import logoAnaCouto from '@/images/logo.png'
import iconArrowDonw from '@/images/svg/arrowdown.svg'
import eFazEFala from '@/images/svg/eFazEFala.svg'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import Menu from '../Menu'
import { NavbarSticky } from '../Navbar/NavbarSticky'
import { pathImagesBr, pathImagesEn } from './common'
import { BackgroundHeaderProps } from './type'

export type Props = {
  hideButtonRef: any
  videoPath: string
  onPause: () => void
  handleReduce: (val: boolean) => void
  menu: { label: string; path: string }[]
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

const DynamicHeader: React.FC<Props> = ({
  hideButtonRef,
  onPause,
  handleReduce,
  menu
}) => {
  const [showBackground, setShowBackground] = useState(true)
  const isMobile = useMediaQuery('(max-width: 600px)')
  const MenuRef = useRef<any>()

  const rawPath: string = usePathname()
  const pathData: BackgroundHeaderProps = getPathData(
    rawPath,
    pathImagesBr,
    pathImagesEn
  )

  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const scrollToTop = (category: string) => {
    setSelectedCategory(category)
    const section = document.getElementById(category)
    if (section)
      section.scrollIntoView({
        behavior: 'smooth'
      })
  }

  const handleSelectChange = (selectValue: string) => {
    scrollToTop(selectValue)
  }

  useEffect(() => {
    handleReduce(
      pathData[isMobile ? 'mobile' : 'desktop']?.includes('reduced') || false
    )
  }, [pathData, isMobile, handleReduce])

  return (
    <>
      <button
        className="none"
        ref={hideButtonRef}
        onClick={() => setShowBackground(!showBackground)}
      />

      <AnimatePresence>
        {showBackground && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0
              }
            }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={`/images/home/${pathData[isMobile ? 'mobile' : 'desktop']}`}
              className="absolute top-0 h-full w-full object-cover"
              alt="Background of Ana Couto"
              quality={100}
              fill
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={false}
        animate={!showBackground ? 'open' : 'closed'}
        onClick={
          showBackground
            ? () => MenuRef.current.click()
            : () => {
                setShowBackground(true)
                onPause()
              }
        }
      >
        <div
          className="absolute right-6 top-16 z-10 cursor-pointer sm:right-16"
          style={{
            filter: pathData.invert
              ? 'invert(0)'
              : 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(247deg) brightness(109%) contrast(103%)'
          }}
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' }
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' }
              }}
            />
          </svg>
        </div>
      </motion.nav>

      <NavbarSticky invert={pathData.invert} />

      <Menu refOpen={MenuRef} menuOptions={menu} />

      <Link href={'/'} scroll={false}>
        <Image
          src={logoAnaCouto}
          alt={'Imagem da logo'}
          className="absolute top-16 z-10 cursor-pointer"
          quality={100}
          height={150}
          width={150}
          {...(pathData.invert && { style: { filter: 'invert(100%)' } })}
        />
      </Link>

      <Image
        src={iconArrowDonw}
        alt={'Imagem de uma seta'}
        className="absolute bottom-20 right-6 z-10 w-4 sm:right-16 sm:w-6"
        width={24}
        style={{ cursor: 'pointer' }}
        onClick={() => handleSelectChange('twoSection')}
        height={24}
        {...(pathData.invert && { style: { filter: 'invert(100%)' } })}
      />

      <AnimatePresence>
        {pathData.showText && showBackground && (
          <motion.div
            initial={{ left: '-200px' }}
            animate={{ left: 'inherit' }}
            exit={{ left: '-200px' }}
            className="absolute top-28 z-10 sm:bottom-20 sm:top-auto"
          >
            <Image
              property="true"
              src={eFazEFala}
              alt="Tipografia: É Faz E Fala"
              style={{ height: 'auto', width: '55%' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default DynamicHeader
