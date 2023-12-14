'use client'

import More from '@/images/svg/more.svg'
import { GetPostsProps } from '@/service/posts/type'
import React, { useCallback, useEffect, useState } from 'react'
import { ArticlesGallery } from '../ArticlesGallery'
import Image from 'next/image'
import { Spinner } from '../ui/Spinner'
import { FilterArticles } from '../ArticlesGallery/FilterArticles'
import axios from 'axios'

const ArticlesGalleryV2 = () => {
  const defaultArticles = [[]] as GetPostsProps[][]
  const [articles, setArticles] = useState({
    data: defaultArticles,
    isLoading: false
  })

  const [dataToFilter, setDataToFilter] = useState<GetPostsProps[]>([])

  const HandleGetPosts = useCallback(() => {
    try {
      setArticles({
        data: articles.data,
        isLoading: true
      })

      axios
        .get(
          ` https://web.anacouto.com.br/?rest_route=/wp/v2/posts&_embed&per_page=5&page=${articles.data.length}`
        )
        .then(data => {
          setArticles({
            data: [...articles.data, data.data],
            isLoading: false
          })
        })
    } catch (err) {
      console.log('Request to Wordpress Failed')
    }
  }, [articles.data])

  useEffect(() => {
    HandleGetPosts()
    axios
      .get(
        `https://web.anacouto.com.br/?rest_route=/wp/v2/posts&_embed&per_page=60&page=1`
      )
      .then(data => setDataToFilter(data.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFilter = (value: number) => {
    if (value === undefined) return
    if (value === 0) {
      setArticles({
        data: defaultArticles,
        isLoading: false
      })
      return
    }

    const dataFiltered = dataToFilter.filter(post =>
      post.categories.includes(value)
    ) as GetPostsProps[]

    const dataFormatted = dataFiltered.reduce(
      (acc, item) => {
        const lastItem = acc[acc.length - 1]
        if (lastItem.length < 5) {
          lastItem.push(item)
          const accFiltered = acc.splice(0, acc.length - 1)
          return [...accFiltered, lastItem]
        }

        return [...acc, [item]]
      },
      [[]] as GetPostsProps[][]
    )

    setArticles({
      data: dataFormatted,
      isLoading: false
    })
  }

  return (
    <>
      <FilterArticles
        galleries={articles.data}
        setGalleries={handleFilter}
        isLoading={dataToFilter.length <= 1}
      />

      <ArticlesGallery posts={articles.data} />

      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-8">
          {articles.isLoading ? (
            <Spinner />
          ) : (
            <button
              className="flex items-center justify-center gap-2 self-center"
              onClick={HandleGetPosts}
            >
              <Image src={More} alt="More Icon" width={24} height={24} />
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default ArticlesGalleryV2
