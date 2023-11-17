'use client'

import More from '@/images/svg/more.svg'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { CasesGallery } from '.'
import { Case, mockCases } from './common'

export function CasesGalleryContainer() {
  const postsPerPage = 5

  const [casesToShow, setCasesToShow] = useState<Case[][]>([])
  const [count, setCount] = useState(1)

  const loopThroughCases = (count: number) => {
    const newCases: Case[] = []

    for (
      let i = count * postsPerPage - postsPerPage;
      i < postsPerPage * count;
      i++
    ) {
      if (mockCases[i] !== undefined) {
        newCases.push(mockCases[i])
      }
    }

    const chunkedCases: Case[][] = []
    for (let i = 0; i < newCases.length; i += 5) {
      chunkedCases.push(newCases.slice(i, i + 5))
    }

    setCasesToShow(prevCases => [...prevCases, ...chunkedCases])
  }

  const handleShowMoreCases = () => {
    setCount(prevCount => prevCount + 1)
    loopThroughCases(count + 1)
  }

  useEffect(() => {
    setCount(prevCount => prevCount + 1)
    loopThroughCases(count)
  }, [])

  return (
    <Fragment>
      <CasesGallery cases={casesToShow} />

      <button
        className="flex items-center justify-center gap-2 self-center"
        onClick={handleShowMoreCases}
      >
        <Image src={More} alt="More Icon" width={24} height={24} />
      </button>
    </Fragment>
  )
}
