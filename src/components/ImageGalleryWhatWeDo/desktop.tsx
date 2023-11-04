'use client'

import Image from 'next/image'
import { ImageGalleryWhatWeDoProps } from './imageGalleryWhatWeDo'

export function ImageGalleryWhatWeDoDesktop({
  images,
  text
}: ImageGalleryWhatWeDoProps) {
  return (
    <div className="grid h-full w-full grid-cols-4 content-stretch items-stretch justify-center gap-4 md:gap-8">
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

          <span className="font-kernCompressed text-2xl font-bold leading-none">
            Lorem ipsum
          </span>
        </div>

        <span className="text-xs font-bold leading-none">
          Através de parceria <br /> estratégica entre cliente <br /> e agência
          chegamos.
        </span>
      </div>

      <div className="flex flex-col gap-5 self-end">
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-1">
          <span className="font-kernCompressed text-2xl font-bold leading-none">
            Dolor
          </span>

          <span className="text-xs font-bold leading-none">
            Através de parceria <br /> estratégica entre cliente <br /> e
            agência chegamos.
          </span>
        </div>

        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[1]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            priority={false}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-12 self-end">
        <span className="text-xs font-bold leading-none">
          Através de parceria <br /> estratégica entre cliente <br /> e agência
          chegamos.
        </span>

        <div className="relative h-auto w-full">
          <span className="font-kernCompressed text-2xl font-bold leading-none">
            Lorem ipsum
          </span>

          <Image
            property="true"
            src={images[2]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mt-5"
            priority={false}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-5 ">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[3]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mb-5"
            priority={false}
            loading="lazy"
          />

          <span className="flex text-xs font-bold leading-none">
            Através de parceria <br /> estratégica entre cliente <br /> e
            agência chegamos.
          </span>
        </div>

        <span className="font-kernCompressed text-2xl font-bold">
          Lorem ipsum
        </span>
      </div>
    </div>
  )
}
