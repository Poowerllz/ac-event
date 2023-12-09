'use client'

import { useFilterGallery } from '@/hooks/useFilterGallery'
import More from '@/images/svg/more.svg'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { CasesGallery } from '.'
import { FilterCases } from './FilterCases'
import { Case, mockCases } from './common'
import axios from 'axios'

interface CasesGalleryContainerProps {
  isHomePage?: boolean
}

export function CasesGalleryContainer({
  isHomePage = false
}: CasesGalleryContainerProps) {
  const [cases, setCases] = useState({
    isLoading: true,
    data: [] as Case[][]
  })

  useEffect(() => {
    axios.get(`/api/cases?limit=${5}`).then(cases => {
      setCases({ isLoading: false, data: [[...cases.data]] })
    })
  }, [])

  const { loopThroughCases } = useFilterGallery()
  const [count, setCount] = useState(1)

  const handleShowMoreCases = () => {
    setCases({ ...cases, isLoading: true })
    axios
      .get(`/api/cases?limit=${5}&page=${cases.data.length * 5}`)
      .then(newCases => {
        setCases({
          isLoading: false,
          data: [...cases.data, [...newCases.data]]
        })
      })
  }

  return (
    <Fragment>
      {!isHomePage && (
        <FilterCases
          setPostToShow={() => {
            setCases({
              ...cases,
              data: cases.data
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
            })
          }}
        />
      )}

      <CasesGallery cases={cases.data} />

      {!isHomePage && (
        <button
          className="flex items-center justify-center gap-2 self-center"
          onClick={handleShowMoreCases}
        >
          <Image src={More} alt="More Icon" width={24} height={24} />
        </button>
      )}
    </Fragment>
  )
}
