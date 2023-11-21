import Image from 'next/image'
import { ImageGalleryWhoWeAreProps } from './type'

export function ImageGalleryWhoWeAreDesktop({
  images,
  text
}: ImageGalleryWhoWeAreProps) {
  return (
    <div className="grid h-full w-full grid-cols-4 content-stretch items-stretch justify-center gap-2 md:gap-4">
      <div className="flex flex-col gap-5 md:gap-0">
        <div className="relative mb-4 h-auto w-full">
          <Image
            property="true"
            src={images[0]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            priority={false}
            loading="lazy"
            objectFit="cover"
          />
        </div>

        <span className="text-2xl leading-none">
          Propósito <br /> engajador <br /> e de impacto
        </span>
      </div>

      <div className="flex flex-col gap-5 self-end">
        <span className="hidden text-2xl leading-none md:flex">
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
            objectFit="cover"
          />
        </div>
      </div>

      <div className="flex">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[2]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            priority={false}
            loading="lazy"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-normal gap-5 md:gap-0">
        <div className="relative mb-4 h-auto w-full">
          <Image
            property="true"
            src={images[3]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            priority={false}
            loading="lazy"
            objectFit="cover"
          />
        </div>

        <span className="text-2xl leading-none">
          Narrativas <br /> que conectam <br /> com o seu <br /> público
        </span>
      </div>
    </div>
  )
}
