'use client'
import { cn } from '@/common/utils/cn'
import logoAnaCouto from '@/images/logo.png'
import iconCloseButon from '@/images/svg/times.svg'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import iconMenu from '../../../../public/menu.svg'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  invertColor?: boolean
}

const Menu: React.FC<Props> = ({ invertColor }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const items = [
    { label: 'Quem somos', path: 'quem-somos' },
    { label: 'O que fazemos', path: 'o-que-fazemos' },
    { label: 'Cases', path: '/cases' },
    { label: 'Artigos', path: '/artigos' },
    { label: 'Contato', path: '/contato' }
  ]

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [menuIsOpen])

  return (
    <>
      <Image
        src={iconMenu}
        alt={'Imagem de um menu'}
        className="absolute right-6 top-16 z-10 cursor-pointer sm:right-16"
        width={25}
        height={15}
        style={{
          cursor: 'pointer',
          ...(invertColor && { filter: 'invert(100%)' })
        }}
        onClick={() => setMenuIsOpen(true)}
      />

      <div className="absolute right-10 top-16 flex items-center justify-center sm:right-20">
        <AnimatePresence>
          {menuIsOpen && (
            <motion.div
              key={'header-modal'}
              initial={{
                width: '32px',
                height: '32px',
                borderRadius: '50%'
              }}
              animate={{
                width: '4000px',
                height: '4000px'
              }}
              exit={{
                width: '32px',
                height: '32px',
                borderRadius: '50%'
              }}
              transition={{
                ease: 'circIn',
                duration: 0.5
              }}
              className="absolute z-50 flex h-screen w-screen flex-col overflow-hidden bg-black"
            >
              <motion.div
                initial={{ opacity: 0, left: '100px' }}
                animate={{ opacity: 1, left: 0 }}
                exit={{ opacity: 0, left: '100px', transition: { delay: 0 } }}
                transition={{
                  delay: 0.51
                }}
                key={'texts'}
                className="fixed left-0 top-0 flex h-screen w-screen flex-col overflow-auto p-6 sm:p-16"
              >
                <div className="flex w-full items-center justify-between">
                  <Link
                    href={'/'}
                    scroll={false}
                    onClick={() => setMenuIsOpen(false)}
                  >
                    <Image
                      src={logoAnaCouto}
                      alt={'Imagem da logo'}
                      className="w-16 sm:w-36"
                      quality={100}
                      height={150}
                      width={150}
                    />
                  </Link>

                  <div className="flex items-center gap-4 sm:gap-10">
                    <h2 className="text-md cursor-pointer font-kernCompressed font-normal text-white hover:text-primary sm:text-2xl">
                      Loja
                    </h2>
                    <h2 className="text-md cursor-pointer font-kernCompressed font-normal text-white hover:text-primary sm:text-2xl">
                      Valometry
                    </h2>
                    <h2 className="text-md cursor-pointer font-kernCompressed font-normal text-white hover:text-primary sm:text-2xl">
                      Carreiras
                    </h2>
                    <Image
                      onClick={() => setMenuIsOpen(false)}
                      src={iconCloseButon}
                      className="w-4 cursor-pointer sm:w-6"
                      alt={'Ícone para fechar'}
                      width={24}
                      height={24}
                    />
                  </div>
                </div>

                <div className="mt-12 flex w-full flex-col gap-4 sm:mt-24">
                  {items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      scroll={false}
                      onClick={() => setMenuIsOpen(false)}
                    >
                      <h3
                        className={cn(
                          'cursor-pointer font-kernCompressed text-6xl font-bold hover:text-primary sm:text-8xl',
                          'text-off_white'
                        )}
                      >
                        {item.label}
                      </h3>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Menu
