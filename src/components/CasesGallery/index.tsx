'use client'

import { shimmer } from '@/common/utils/shimmer'
import { toBase64 } from '@/common/utils/toBase64'
import BackgroundPlaceholder from '@/images/png/background-placeholder.png'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Case } from './common'
interface CasesGalleryProps {
  cases: Array<Case[]>
}

export function CasesGallery({ cases }: CasesGalleryProps) {
  const divsClass = [
    'col-span-2 h-[660px]',
    'max-[640px]:col-span-2 row-start-2 sm:row-span-2',
    'max-[640px]:col-span-2 sm:col-start-1 row-start-3 sm:row-start-4',
    'max-[640px]:col-span-2 sm:col-start-2 row-start-4 sm:row-start-2',
    'max-[640px]:col-span-2 sm:row-span-2 sm:col-start-2 row-start-5 sm:row-start-3'
  ]

  return (
    <Fragment>
      {cases?.map((item, itemIndex) => (
        <div
          key={String(itemIndex)}
          className="grid min-h-[200vh] grid-cols-2 grid-rows-5 gap-1 sm:grid-rows-4 sm:gap-4"
        >
          {item?.map((post, postIndex) => (
            <Link
              key={String(postIndex)}
              href={`/${post?.href ?? '#'}`}
              className={`relative flex flex-col items-start justify-between transition hover:grayscale ${divsClass[postIndex]}`}
            >
              <span className="m-4 rounded-md bg-white px-2 py-[0.1rem] font-bold sm:top-5 sm:flex">
                Cases
              </span>

              <Image
                src={post?.thumbnail || BackgroundPlaceholder}
                alt="Image"
                className="absolute top-0 -z-[1] object-cover"
                width={1024}
                height={576}
                style={{ width: '100%', height: '100%' }}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
              />

              <h5 className="m-4 text-base font-bold text-white transition max-[425px]:text-sm sm:text-2xl">
                {post?.title ?? ''}
              </h5>
            </Link>
          ))}
        </div>
      ))}
    </Fragment>
  )
}
