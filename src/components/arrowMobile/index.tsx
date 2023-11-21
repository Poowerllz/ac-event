'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import { useState } from 'react'

interface arrowProps {
  name: string
  section?: string
}
export const ArrowMobile = ({ name, section }: arrowProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')

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

  return (
    <>
      {isMobile ? (
        <>
          <Image
            src={name}
            alt={'Imagem de uma seta'}
            width={12}
            height={25}
            style={{ cursor: 'pointer' }}
            onClick={() => handleSelectChange(section || '')}
          />
        </>
      ) : (
        <>
          <Image
            src={name}
            alt={'Imagem de uma seta'}
            width={22}
            height={50}
            style={{ cursor: 'pointer' }}
            onClick={() => handleSelectChange(section || '')}
          />
        </>
      )}
    </>
  )
}
