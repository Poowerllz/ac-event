'use client'

import More from '@/images/svg/more.svg'
import { useGetAllCategories } from '@/service/posts/categories/useGetAllCategories'
import { GetPostsProps } from '@/service/posts/type'
import Image from 'next/image'
import { useState } from 'react'

interface FilterArticlesProps {
  galleries: GetPostsProps[][]
  isLoading?: boolean
  setGalleries: (opt: number) => void
}

export function FilterArticles({
  galleries,
  isLoading,
  setGalleries
}: FilterArticlesProps) {
  const { data: options } = useGetAllCategories()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleOptionSelect = (option: { name: string; id: number }) => {
    setSelectedOption(option.name)
    setGalleries(option.id)
    setIsMenuOpen(false)
  }

  return (
    <div className="relative px-6 sm:px-16">
      <div className="flex items-center">
        <button
          className="flex items-center justify-center gap-2 self-start"
          onClick={() => {
            if (!isLoading) {
              toggleMenu()
            }
          }}
        >
          <Image src={More} alt="More Icon" width={24} height={24} />
          <span className="font-bold leading-3">
            {isLoading
              ? 'Carregando filtros'
              : selectedOption || 'Filtrar por interesse'}
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-6 top-10 z-10 max-h-52 overflow-auto rounded border bg-white shadow sm:left-16">
          <ul>
            {options.map((option: any) => (
              <li
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                className="cursor-pointer p-3 transition hover:bg-primary hover:text-white hover:transition"
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
