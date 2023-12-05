'use client'

import WorldIcon from '@/images/svg/world.svg'
import Image from 'next/image'
import { useState } from 'react'
import { Popover } from 'react-tiny-popover'
import { Languagues } from './Languagues'

export function SelectLanguage() {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false)

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['bottom']}
      containerClassName="z-[999]"
      content={<Languagues />}
    >
      <div
        className="cursor-pointer text-white"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        <Image src={WorldIcon} alt="World Icon" width={24} height={24} />
      </div>
    </Popover>
  )
}
