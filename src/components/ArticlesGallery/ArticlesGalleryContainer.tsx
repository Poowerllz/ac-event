'use client'

import More from '@/images/svg/more.svg'
import { useGetAllPosts } from '@/service/posts/useGetAllPosts'
import Image from 'next/image'
import { Fragment } from 'react'
import { ArticlesGallery } from '.'
import { Spinner } from '../ui/Spinner'

export function ArticlesGalleryContainer() {
  const { galleries, handleGetAllPosts, loading } = useGetAllPosts()

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <Fragment>
      {galleries
        .slice(1)
        .map(
          (cases, index) =>
            cases.length > 0 && <ArticlesGallery key={index} cases={cases} />
        )}
      <button
        className="flex items-center justify-center gap-2 self-center"
        onClick={() => handleGetAllPosts()}
      >
        <Image src={More} alt="More Icon" width={24} height={24} />
      </button>
    </Fragment>
  )
}
