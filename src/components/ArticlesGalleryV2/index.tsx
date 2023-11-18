'use client'

import More from '@/images/svg/more.svg'
import { GetPostsProps } from '@/service/posts/type'
import React, { useCallback, useEffect, useState } from 'react'
import { ArticlesGallery } from '../ArticlesGallery'
import Image from 'next/image'
import { Spinner } from '../ui/Spinner'
import api from '@/service/api'
import { FilterArticles } from '../ArticlesGallery/FilterArticles'

export const mockArticles: any[] = [
  {
    slug: 'paper-branding-trends-2023',
    title: { rendered: 'PAPER BRANDING TRENDS 2023' },
    _embedded: {
      'wp:term': [[{ name: 'Downloads' }]],
      'wp:featuredmedia': [
        {
          media_details: {
            sizes: {
              'full-width-horizontal': {
                source_url:
                  'http://www.anacouto.com.br/wp-content/uploads/2023/03/SITE-1.png'
              }
            }
          }
        }
      ]
    }
  },
  {
    slug: 'branding-na-cadeira-do-ceo',
    title: { rendered: 'BRANDING NA CADEIRA DO CEO' },
    _embedded: {
      'wp:term': [[{ name: 'Artigos' }, { name: 'Matéria' }]],
      'wp:featuredmedia': [
        {
          media_details: {
            sizes: {
              'full-width-horizontal': {
                source_url:
                  'https://www.anacouto.com.br/wp-content/uploads/2021/10/TIP-TALKS_21-2-site.png'
              }
            }
          }
        }
      ]
    }
  },

  {
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
                source_url:
                  'https://www.anacouto.com.br/wp-content/uploads/2023/01/header_site-1.png'
              }
            }
          }
        }
      ]
    }
  },
  {
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
                source_url:
                  'https://www.anacouto.com.br/wp-content/uploads/2022/09/PAPER_capa_V02-1.png'
              }
            }
          }
        }
      ]
    }
  },
  {
    slug: 'proposito-decodificado-um-olhar-renovador-sobre-um-tema-cansado/',
    title: { rendered: 'BRANDING BRASIL – O VALOR QUE O PAÍS GERA' },
    _embedded: {
      'wp:term': [[{ name: 'Materias' }]],
      'wp:featuredmedia': [
        {
          media_details: {
            sizes: {
              'full-width-horizontal': {
                source_url:
                  'http://www.anacouto.com.br/wp-content/uploads/2022/07/BB_banner_site_1-1.png'
              }
            }
          }
        }
      ]
    }
  }
]

const ArticlesGalleryV2 = () => {
  const [articles, setArticles] = useState({
    data: [mockArticles, [], []] as GetPostsProps[][],
    isLoading: false
  })

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

  return (
    <>
      <FilterArticles galleries={articles.data} setGalleries={console.log} />

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
