'use client'

import More from '@/images/svg/more.svg'
import { useGetAllPosts } from '@/service/posts/useGetAllPosts'
import Image from 'next/image'
import { Fragment } from 'react'
import { ArticlesGallery } from '.'
import { Spinner } from '../ui/Spinner'
import { FilterArticles } from './FilterArticles'

export function ArticlesGalleryContainer() {
  const { galleries, handleGetAllPosts, loading, addGallery } = useGetAllPosts()

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <Fragment>
      <FilterArticles addGallery={addGallery} />

      <ArticlesGallery posts={galleries} />

      <button
        className="flex items-center justify-center gap-2 self-center"
        onClick={() => handleGetAllPosts()}
      >
        <Image src={More} alt="More Icon" width={24} height={24} />
      </button>
    </Fragment>
  )
}
