import Image from 'next/image'
import { ImageGalleryWhoWeAreProps } from './type'
import { useTranslations } from 'next-intl'
export function ImageGalleryWhoWeAreMobile({
  images,
  text
}: ImageGalleryWhoWeAreProps) {
  const t = useTranslations('WhoWeAre')
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
          {t('secondSection.gallery.titleOne')}
        </span>
      </div>

      <div className="flex flex-col justify-between gap-5">
        <span className="hidden text-sm font-extralight leading-none sm:text-2xl md:flex">
          {t('secondSection.gallery.titleTwo')}
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
          {t('secondSection.gallery.titleThree')}
        </span>
      </div>
    </div>
  )
}
