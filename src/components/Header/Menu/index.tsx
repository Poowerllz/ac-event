'use client'
import { cn } from '@/common/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
  invertColor?: boolean
}

const Menu: React.FC<Props> = ({ invertColor }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const items = [
    { label: 'Quem somos', path: 'quem-somos' },
    { label: 'O que fazemos', path: 'o-que-fazemos' },
    { label: 'Cases', path: '' },
    { label: 'Artigos', path: '' },
    { label: 'Contato', path: '' }
  ]

  return (
    <>
      <Image
        src={'menu.svg'}
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

      {menuIsOpen && (
        <div className="fixed left-0 z-50 flex h-screen w-screen flex-col overflow-auto bg-black p-6 sm:p-16">
          <div className="flex w-full items-center justify-between">
            <Link
              href={'/'}
              scroll={false}
              onClick={() => setMenuIsOpen(false)}
            >
              <Image
                src={'/images/logo.png'}
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
                src={'./images/svg/times.svg'}
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
        </div>
      )}
    </>
  )
}

export default Menu
