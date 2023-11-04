'use client'

import Image from 'next/image'
import { ImageGalleryWhatWeDoProps } from './imageGalleryWhatWeDo'

export function ImageGalleryWhatWeDoMobile({
  images,
  text
}: ImageGalleryWhatWeDoProps) {
  console.log('teste')

  return (
    <div className="flex h-full w-full flex-col content-stretch items-stretch justify-center gap-4 md:gap-8">
      <div className="flex flex-col justify-between gap-5">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[0]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mb-5"
            priority={false}
            loading="lazy"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-kernCompressed text-2xl font-bold leading-none">
            Lorem ipsum
          </span>
          <span className="text-xs font-bold leading-none">
            Através de parceria <br /> estratégica entre cliente <br /> e
            agência chegamos.
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-5">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[1]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mb-5"
            priority={false}
            loading="lazy"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-kernCompressed text-2xl font-bold leading-none">
            Dolor
          </span>
          <span className="text-xs font-bold leading-none">
            Através de parceria <br /> estratégica entre cliente <br /> e
            agência chegamos.
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-5">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[2]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mb-5"
            priority={false}
            loading="lazy"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-kernCompressed text-2xl font-bold leading-none">
            Lorem ipsum
          </span>
          <span className="text-xs font-bold leading-none">
            Através de parceria <br /> estratégica entre cliente <br /> e
            agência chegamos.
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-5">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[0]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mb-5"
            priority={false}
            loading="lazy"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-kernCompressed text-2xl font-bold leading-none">
            Lorem ipsum
          </span>
          <span className="text-xs font-bold leading-none">
            Através de parceria <br /> estratégica entre cliente <br /> e
            agência chegamos.
          </span>
        </div>
      </div>
    </div>
  )
}
