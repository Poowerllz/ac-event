'use client'

import React, { useState } from 'react'
import { Props } from './types'
import { cn } from '@/common/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'

const Dropdown: React.FC<Props> = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex  flex-col">
      <div
        className="flex w-full cursor-pointer items-end justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="font-kernCompressed text-3xl font-bold text-white transition hover:text-primary hover:transition sm:text-6xl">
          {title}
        </h1>

        <div className="mr-1 flex gap-1 text-[0.55rem] text-white sm:bottom-2 sm:text-sm">
          {items.map((item, key) => (
            <h2 key={key} className="font-kernCompressed font-semibold">
              {item}
              {items.length - 1 === key ? '' : ','}
            </h2>
          ))}
        </div>
      </div>

      <hr
        className={cn('mb-6 h-0.5 w-full border-0', 'bg-gray-300 opacity-50')}
      />
    </div>
  )
}

export default Dropdown
