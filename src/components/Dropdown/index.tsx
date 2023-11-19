'use client'

import React, { useState } from 'react'
import { Props } from './types'
import { cn } from '@/common/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const Dropdown: React.FC<Props> = ({ items, title, startsOpen }) => {
  const [isOpen, setIsOpen] = useState(startsOpen)

  return (
    <div className="relative flex  flex-col">
      <div
        className="flex w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="font-kernCompressed text-3xl font-bold text-white transition hover:text-primary hover:transition sm:text-6xl">
          {title}
        </h1>

        <Image
          width={64}
          height={64}
          className={`ml-auto mt-auto h-4 w-4 transition-all ${
            isOpen ? 'rotate-180' : ''
          }`}
          src={'/images/chevron-down.png'}
          alt="Ícone de uma seta para baixo"
        />
      </div>

      <motion.div
        className={`mb-4 mt-1 flex flex-col gap-2 overflow-hidden text-white`}
        style={{ overflow: 'hidden' }}
        transition={{ ease: 'easeInOut' }}
        key={'container'}
        animate={{
          height: isOpen ? 'auto' : 0
        }}
      >
        {items.map((item, key) => (
          <h2 key={key}>{item}</h2>
        ))}
      </motion.div>

      <hr
        className={cn('mb-6 h-0.5 w-full border-0', 'bg-gray-300 opacity-50')}
      />
    </div>
  )
}

export default Dropdown
