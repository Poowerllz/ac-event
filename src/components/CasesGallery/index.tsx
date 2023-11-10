'use client'

import { shimmer } from '@/common/utils/shimmer'
import { toBase64 } from '@/common/utils/toBase64'
import BackgroundPlaceholder from '@/images/png/background-placeholder.png'
import { GetPostsProps } from '@/service/posts/type'
import Image from 'next/image'
import Link from 'next/link'

interface CasesGalleryProps {
  cases: Array<GetPostsProps>
}

export function CasesGallery({ cases }: CasesGalleryProps) {
  const divsClass = [
    'col-span-2',
    'row-span-2 row-start-2',
    'col-start-1 row-start-4',
    'col-start-2 row-start-2',
    'row-span-2 col-start-2 row-start-3'
  ]

  return (
    <div className="grid min-h-[200vh] grid-cols-2 grid-rows-4 gap-4">
      {cases.map((post, index: number) => (
        <Link
          key={index}
          href={`/cases/${post.slug}`}
          className={`relative flex flex-col items-start justify-between transition hover:grayscale ${divsClass[index]}`}
        >
          <span className="m-4 hidden rounded-md bg-white px-2 py-[0.1rem] font-bold sm:top-5 sm:flex">
            Cases
          </span>

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

// <Fragment>
//   <div className="grid min-h-[200vh] grid-cols-2 grid-rows-4 gap-4">
//     {posts?.map((post, index: number) => (
//       <Link
//         key={index}
//         href={`/cases/${post.slug}`}
//         target="_blank"
//         className={`relative flex flex-col items-start justify-between transition hover:grayscale ${divsClass[index]}`}
//       >
//         <span className="m-4 hidden rounded-md bg-white px-2 py-[0.1rem] font-bold sm:top-5 sm:flex">
//           Cases
//         </span>

//         <Image
//           src={
//             post?._embedded['wp:featuredmedia']?.[0]?.media_details
//               ?.sizes?.['full-width-horizontal']?.source_url ||
//             BackgroundPlaceholder
//           }
//           alt="Image"
//           className="absolute top-0 -z-[1] object-cover"
//           width={
//             post?._embedded['wp:featuredmedia']?.[0]?.media_details
//               ?.sizes?.['full-width-horizontal']?.width || 1024
//           }
//           height={
//             post?._embedded['wp:featuredmedia']?.[0]?.media_details
//               ?.sizes?.['full-width-horizontal']?.height || 576
//           }
//           style={{ width: '100%', height: '100%' }}
//           placeholder={`data:image/svg+xml;base64,${toBase64(
//             shimmer(700, 475)
//           )}`}
//         />

//         <h5 className="m-4 text-base font-bold text-white transition max-[425px]:text-sm sm:text-2xl">
//           {post.title.rendered}
//         </h5>
//       </Link>
//     ))}
//   </div>

//   <button
//     className="flex items-center justify-center gap-2 self-center"
//     onClick={handleChangePage}
//   >
//     <Image src={More} alt="More Icon" width={24} height={24} />
//   </button>
// </Fragment>
