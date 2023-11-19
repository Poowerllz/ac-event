'use client'

import React, { useState } from 'react'
import { Props } from './types'

const TextAnimation: React.FC<Props> = ({ newText, startText, className }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <h1
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`font-kernCompressed text-[4.5rem] font-bold  sm:text-[16rem] ${className} cursor-default transition`}
      style={{ lineHeight: 0, color: isHovered ? '#E7E8DE' : '#000000' }}
    >
      {isHovered ? newText : startText}
    </h1>
  )
}

export default TextAnimation
