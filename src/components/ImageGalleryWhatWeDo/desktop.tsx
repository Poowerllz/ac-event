import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ImageGalleryWhatWeDoSubtitle } from './ImageGalleryWhatWeDoSubtitle'
import { ImageGalleryWhatWeDoTitle } from './ImageGalleryWhatWeDoTitle'
import { ImageGalleryWhatWeDoProps } from './type'

export function ImageGalleryWhatWeDoDesktop({
  images,
  text
}: ImageGalleryWhatWeDoProps) {
  const t = useTranslations('WhatWeDo')
  return (
    <div className="hidden h-full w-full grid-cols-4 content-stretch items-stretch justify-center gap-2 sm:grid md:gap-4">
      <div className="flex flex-col justify-between gap-5">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[0]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mb-5"
            objectFit="cover"
            priority={false}
            loading="lazy"
          />

          <ImageGalleryWhatWeDoTitle>
            {t('fifthSection.firstLine.title')}
          </ImageGalleryWhatWeDoTitle>
        </div>

        <ImageGalleryWhatWeDoSubtitle>
          {t('fifthSection.firstLine.text')}
        </ImageGalleryWhatWeDoSubtitle>
      </div>

      <div className="flex flex-col gap-5 self-end">
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-4">
          <div className="mt-auto">
            <ImageGalleryWhatWeDoTitle>
              {' '}
              {t('fifthSection.secondLine.title')}
            </ImageGalleryWhatWeDoTitle>
          </div>

          <ImageGalleryWhatWeDoSubtitle>
            {t('fifthSection.secondLine.text')}
          </ImageGalleryWhatWeDoSubtitle>
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
        <ImageGalleryWhatWeDoSubtitle>
          {t('fifthSection.thirdLine.text')}
        </ImageGalleryWhatWeDoSubtitle>

        <div className="relative h-auto w-full">
          <ImageGalleryWhatWeDoTitle>
            {t('fifthSection.thirdLine.title')}
          </ImageGalleryWhatWeDoTitle>

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

          <ImageGalleryWhatWeDoSubtitle>
            {t('fifthSection.fourthLline.title')}
          </ImageGalleryWhatWeDoSubtitle>
        </div>

        <ImageGalleryWhatWeDoTitle>
          {t('fifthSection.fourthLline.text')}
        </ImageGalleryWhatWeDoTitle>
      </div>
    </div>
  )
}
