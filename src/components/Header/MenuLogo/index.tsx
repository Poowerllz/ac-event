'use client'

import { cn } from '@/common/utils/cn'
import logoAnaCouto from '@/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '../Menu'
import { MenuLogoProps } from './type'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

export function MenuLogo({ bgColor }: MenuLogoProps) {
  const OpenMenu = useRef<any>()

  return (
    <nav className={cn('flex w-full items-center p-16', bgColor)}>
      <Menu refOpen={OpenMenu} />

      <motion.nav
        initial={false}
        animate={'closed'}
        onClick={() => OpenMenu.current.click()}
      >
        <div className="absolute right-6 top-16 z-10 cursor-pointer sm:right-16">
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

      <Link href={'/'} scroll={false} className="invert">
        <Image
          src={logoAnaCouto}
          alt={'Imagem da logo'}
          className="z-10 cursor-pointer"
          height={100}
          width={100}
        />
      </Link>
    </nav>
  )
}
