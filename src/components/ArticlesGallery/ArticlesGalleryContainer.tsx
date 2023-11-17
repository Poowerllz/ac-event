'use client'

import More from '@/images/svg/more.svg'
import { GetPostsProps } from '@/service/posts/type'
import { useGetAllPosts } from '@/service/posts/useGetAllPosts'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { ArticlesGallery } from '.'
import { Spinner } from '../ui/Spinner'

export function ArticlesGalleryContainer() {
  const { galleries, handleGetAllPosts, loading } = useGetAllPosts()
  const [postsToShow, setPostShow] = useState<GetPostsProps[][]>(galleries)

  const handleShowMoreCases = () => {
    handleGetAllPosts()

    setPostShow(prevCases => [...prevCases, ...galleries])
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <Fragment>
      {/* <FilterArticles galleries={galleries} setGalleries={setPostShow} /> */}

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
