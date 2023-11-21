import Image from 'next/image'
import { ImageGalleryWhoWeAreProps } from './type'

export function ImageGalleryWhoWeAreMobile({
  images,
  text
}: ImageGalleryWhoWeAreProps) {
  return (
    <div className="flex h-full w-full flex-col content-stretch items-stretch justify-center gap-2 md:gap-4">
      <div className="flex flex-col justify-between gap-5">
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

        <span className="text-sm font-extralight leading-none sm:text-2xl">
          Propósito <br /> engajador <br /> e de impacto
        </span>
      </div>

      <div className="flex flex-col justify-between gap-5">
        <span className="hidden text-sm font-extralight leading-none sm:text-2xl md:flex">
          Experiências <br /> memoráveis <br /> que fidelizam
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

      <div className="flex flex-col justify-between gap-5">
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

      <div className="flex flex-col justify-between gap-5">
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

        <span className="text-sm font-extralight leading-none sm:text-2xl">
          Narrativas <br /> que conectam <br /> com o seu <br /> público
        </span>
      </div>
    </div>
  )
}
