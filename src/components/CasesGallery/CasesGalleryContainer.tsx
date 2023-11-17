'use client'

import { useFilterGallery } from '@/hooks/useFilterGallery'
import More from '@/images/svg/more.svg'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { CasesGallery } from '.'
import { FilterCases } from './FilterCases'
import { Case, mockCases } from './common'

export function CasesGalleryContainer() {
  const [caseToShow, setCaseToShow] = useState<Case[][]>([])

  const { loopThroughCases } = useFilterGallery()
  const [count, setCount] = useState(1)

  const handleShowMoreCases = () => {
    setCount(prevCount => prevCount + 1)
    const data = loopThroughCases(count + 1, mockCases, 5)

    setCaseToShow(prevCases => [...prevCases, ...data])
  }

  useEffect(() => {
    setCount(prevCount => prevCount + 1)
    const data = loopThroughCases(count, mockCases, 5)

    setCaseToShow(prevCases => [...prevCases, ...data])
  }, [])

  return (
    <Fragment>
      <FilterCases setPostToShow={setCaseToShow} />

      <CasesGallery cases={caseToShow} />

      <button
        className="flex items-center justify-center gap-2 self-center"
        onClick={handleShowMoreCases}
      >
        <Image src={More} alt="More Icon" width={24} height={24} />
      </button>
    </Fragment>
  )
}
