'use client'

import More from '@/images/svg/more.svg'
import { GetPostsProps } from '@/service/posts/type'
import React, { useCallback, useEffect, useState } from 'react'
import { ArticlesGallery } from '../ArticlesGallery'
import Image from 'next/image'
import { Spinner } from '../ui/Spinner'
import api from '@/service/api'
import { FilterArticles } from '../ArticlesGallery/FilterArticles'
import LegacySiteURL from '@/common/utils/variables'

export const mockArticles: any[] = [
  {
    id: 12515,
    slug: 'paper-branding-trends-2023',
    title: { rendered: 'PAPER BRANDING TRENDS 2023' },
    _embedded: {
      'wp:term': [[{ name: 'Downloads' }]],
      'wp:featuredmedia': [
        {
          media_details: {
            sizes: {
              'full-width-horizontal': {
                source_url: `${LegacySiteURL}/wp-content/uploads/2023/03/SITE-1.png`
              }
            }
          }
        }
      ]
    }
  },
  {
    id: 10398,
    slug: 'branding-na-cadeira-do-ceo',
    title: { rendered: 'BRANDING NA CADEIRA DO CEO' },
    _embedded: {
      'wp:term': [[{ name: 'Artigos' }, { name: 'Matéria' }]],
      'wp:featuredmedia': [
        {
          media_details: {
            sizes: {
              'full-width-horizontal': {
                source_url: `${LegacySiteURL}/wp-content/uploads/2021/10/TIP-TALKS_21-2-site.png`
              }
            }
          }
        }
      ]
    }
  },
  {
    id: 12420,
    slug: 'calendario-2023/',
    title: {
      rendered: 'ORGANIZAÇÃO E IDEIAS EM AÇÃO: BAIXE O SEU CALENDÁRIO 2023'
    },
    _embedded: {
      'wp:term': [[{ name: 'Artigos' }, { name: 'Matéria' }]],
      'wp:featuredmedia': [
        {
          media_details: {
            sizes: {
              'full-width-horizontal': {
                source_url: `${LegacySiteURL}/wp-content/uploads/2023/01/header_site-1.png`
              }
            }
          }
        }
      ]
    }
  },
  {
    id: 12018,
    slug: 'proposito-decodificado-um-olhar-renovador-sobre-um-tema-cansado/',
    title: {
      rendered:
        'Propósito decodificado: um olhar renovador sobre um tema cansado'
    },
    _embedded: {
      'wp:term': [[{ name: 'Artigos' }, { name: 'Downloads' }]],
      'wp:featuredmedia': [
        {
          media_details: {
            sizes: {
              'full-width-horizontal': {
                source_url: `${LegacySiteURL}/wp-content/uploads/2022/09/PAPER_capa_V02-1.png`
              }
            }
          }
        }
      ]
    }
  },
  {
    id: 11171,
    slug: 'proposito-decodificado-um-olhar-renovador-sobre-um-tema-cansado/',
    title: { rendered: 'BRANDING BRASIL – O VALOR QUE O PAÍS GERA' },
    _embedded: {
      'wp:term': [[{ name: 'Materias' }]],
      'wp:featuredmedia': [
        {
          media_details: {
            sizes: {
              'full-width-horizontal': {
                source_url: `${LegacySiteURL}/wp-content/uploads/2022/07/BB_banner_site_1-1.png`
              }
            }
          }
        }
      ]
    }
  }
]

const FilterCategories = {
  Downloads: 137,
  Artigos: 5,
  Matérias: 1,
  Todas: 0,
  'TIP Insights': 134
}

const ArticlesGalleryV2 = () => {
  const defaultArticles = [mockArticles, [], []] as GetPostsProps[][]
  const [articles, setArticles] = useState({
    data: defaultArticles,
    isLoading: false
  })

  const [dataToFilter, setDataToFilter] = useState<GetPostsProps[]>([])
  useEffect(() => {
    api
      .get(`/posts?_embed&per_page=60&page=1`)
      .then(data => setDataToFilter(data.data))
  }, [])

  const HandleGetPosts = useCallback(() => {
    try {
      setArticles({
        data: articles.data,
        isLoading: true
      })

      api
        .get(`/posts?_embed&per_page=5&page=${articles.data.length}`)
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
