'use client'

import { shimmer } from '@/common/utils/shimmer'
import { toBase64 } from '@/common/utils/toBase64'
import BackgroundPlaceholder from '@/images/png/background-placeholder.png'
import { GetPostsProps } from '@/service/posts/type'
import Image from 'next/image'
import Link from 'next/link'

interface ArticlesGalleryProps {
  cases: Array<GetPostsProps>
}

export function ArticlesGallery({ cases }: ArticlesGalleryProps) {
  const divsClass = [
    'col-span-2',
    'max-[640px]:col-span-2 row-start-2 sm:row-span-2',
    'max-[640px]:col-span-2 sm:col-start-1 row-start-3 sm:row-start-4',
    'max-[640px]:col-span-2 sm:col-start-2 row-start-4 sm:row-start-2',
    'max-[640px]:col-span-2 sm:row-span-2 sm:col-start-2 row-start-5 sm:row-start-3'
  ]

  return (
    <div className="grid min-h-[200vh] grid-cols-2 grid-rows-5 gap-4 sm:grid-rows-4">
      {cases.map((post, index: number) => (
        <Link
          key={index}
          href={`/artigos/${post.slug}`}
          className={`relative flex flex-col items-start justify-between transition hover:grayscale ${divsClass[index]}`}
        >
          <div className="flex">
            {post?._embedded['wp:term'][0].map(area => {
              return (
                <span
                  key={area?.name}
                  className="ml-4 mt-4 bg-white px-2 py-[0.1rem] font-bold sm:top-5 sm:flex"
                >
                  {area?.name ?? 'Artigo'}
                </span>
              )
            })}
          </div>

          <Image
            src={
              post?._embedded['wp:featuredmedia']?.[0]?.media_details?.sizes?.[
                'full-width-horizontal'
              ]?.source_url || BackgroundPlaceholder
            }
            alt="Image"
            className="absolute top-0 -z-[1] object-cover"
            width={
              post?._embedded['wp:featuredmedia']?.[0]?.media_details?.sizes?.[
                'full-width-horizontal'
              ]?.width || 1024
            }
            height={
              post?._embedded['wp:featuredmedia']?.[0]?.media_details?.sizes?.[
                'full-width-horizontal'
              ]?.height || 576
            }
            style={{ width: '100%', height: '100%' }}
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />

          <h5 className="m-4 text-base font-bold text-white transition max-[425px]:text-sm sm:text-2xl">
            {post.title.rendered}
          </h5>
        </Link>
      ))}
    </div>
  )
}
