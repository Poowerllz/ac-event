'use client'

import More from '@/images/svg/more.svg'
import { GetPostsProps } from '@/service/posts/type'
import Image from 'next/image'
import { useState } from 'react'

interface FilterArticlesProps {
  addGallery: (cases: Array<GetPostsProps>) => void
}

export function FilterArticles({ addGallery }: FilterArticlesProps) {
  const options = ['Downloads', 'Artigos', 'Matérias']
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setIsMenuOpen(false)

    // addGallery(filteredCases)
  }

  return (
    <div className="relative px-6 sm:px-16">
      <div className="flex items-center">
        <button
          className="flex items-center justify-center gap-2 self-start"
          onClick={toggleMenu}
        >
          <Image src={More} alt="More Icon" width={24} height={24} />
          <span className="font-bold leading-3">
            {selectedOption || 'Filtrar por cases'}
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-6 top-10 z-10 max-h-52 overflow-auto rounded border bg-white shadow sm:left-16">
          <ul>
            {options.map(option => (
              <li
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="cursor-pointer p-3 transition hover:bg-primary hover:text-white hover:transition"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
