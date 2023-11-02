'use client'

import Image from 'next/image'
import { ImageGallerySectionProps } from './imageGallerySection'

export function ImageGallerySection({ images }: ImageGallerySectionProps) {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-20 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
      <div className="col-span-1 h-full w-full">
        <div className="relative mb-4 h-auto w-full">
          <Image
            property="true"
            src={images[0]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            priority={false}
            loading="lazy"
          />
        </div>

        <span className="text-lg leading-none text-white">
          Propósito <br /> engajador <br /> e de impacto
        </span>
      </div>

      <div className="col-span-2 flex flex-col justify-between gap-2 md:col-span-1">
        <span className="text-lg leading-none text-white">
          Propósito <br /> engajador <br /> e de impacto
        </span>

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

      <div className="col-span-1 h-full w-full">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[2]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            priority={false}
            loading="lazy"
          />
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-normal gap-2 md:col-span-1">
        <div className="relative mb-4 h-auto w-full">
          <Image
            property="true"
            src={images[3]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            priority={false}
            loading="lazy"
          />
        </div>

        <span className="text-lg leading-none text-white">
          Propósito <br /> engajador <br /> e de impacto
        </span>
      </div>
    </div>
  )
}
