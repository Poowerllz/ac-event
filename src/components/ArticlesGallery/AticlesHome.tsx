'use client'

import { shimmer } from '@/common/utils/shimmer'
import { toBase64 } from '@/common/utils/toBase64'
import BackgroundPlaceholder from '@/images/png/background-placeholder.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function AticlesHome() {
  const divsClass = ['', '', 'hidden sm:flex', 'hidden sm:flex']
  const [posts, setPosts] = useState<any[]>()

  useEffect(() => {
    axios
      .get('https://web.anacouto.com.br/?rest_route=/wp/v2/posts&_embed')
      .then(data => setPosts(data.data.slice(0, 4)))
  }, [])

  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-1 sm:grid-cols-4 sm:gap-4">
      {posts && (
        <>
          {posts?.map((post, index) => (
            <Link
              key={String(index)}
              href={`/artigos/${post?.id ?? '#'}`}
              className={`relative flex h-auto flex-col items-start justify-between transition hover:grayscale sm:h-[370px] ${divsClass[index]}`}
            >
              <span className="ml-4 mt-4 bg-white px-2 py-[0.1rem] font-bold sm:top-5 sm:flex">
                Artigo
              </span>

              <Image
                src={
                  post?._embedded['wp:featuredmedia']?.[0]?.media_details
                    ?.sizes?.['full-width-horizontal']?.source_url ||
                  BackgroundPlaceholder
                }
                alt="Image"
                className="absolute top-0 -z-[1] object-cover"
                width={
                  post?._embedded['wp:featuredmedia']?.[0]?.media_details
                    ?.sizes?.['full-width-horizontal']?.width || 1024
                }
                height={
                  post?._embedded['wp:featuredmedia']?.[0]?.media_details
                    ?.sizes?.['full-width-horizontal']?.height || 576
                }
                style={{ width: '100%', height: '100%' }}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
              />

              <h5 className="m-4 text-base font-bold text-white transition max-[425px]:text-xs sm:text-lg">
                {post?.title?.rendered ?? 'Artigo'}
              </h5>
            </Link>
          ))}
        </>
      )}
    </div>
  )
}
