import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ImageGalleryWhatWeDoSubtitle } from './ImageGalleryWhatWeDoSubtitle'
import { ImageGalleryWhatWeDoTitle } from './ImageGalleryWhatWeDoTitle'
import { ImageGalleryWhatWeDoProps } from './type'

export function ImageGalleryWhatWeDoMobile({
  images,
  text
}: ImageGalleryWhatWeDoProps) {
  const t = useTranslations('WhatWeDo')

  return (
    <div className="flex h-full w-full flex-col content-stretch items-stretch justify-center gap-2 sm:hidden md:gap-4">
      <div className="mt-5 flex flex-col justify-between gap-5">
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
          <ImageGalleryWhatWeDoTitle>
            {t('fifthSection.firstLine.title')}
          </ImageGalleryWhatWeDoTitle>

          <ImageGalleryWhatWeDoSubtitle>
            <p className="w-5/12">{t('fifthSection.firstLine.text')}</p>
          </ImageGalleryWhatWeDoSubtitle>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-5">
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
          <ImageGalleryWhatWeDoTitle>
            {' '}
            {t('fifthSection.secondLine.title')}
          </ImageGalleryWhatWeDoTitle>

          <ImageGalleryWhatWeDoSubtitle>
            <p className="w-5/12">{t('fifthSection.secondLine.text')}</p>
          </ImageGalleryWhatWeDoSubtitle>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-5">
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
          <ImageGalleryWhatWeDoTitle>
            {' '}
            {t('fifthSection.thirdLine.title')}
          </ImageGalleryWhatWeDoTitle>

          <ImageGalleryWhatWeDoSubtitle>
            <p className="w-5/12"> {t('fifthSection.thirdLine.text')}</p>
          </ImageGalleryWhatWeDoSubtitle>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-5">
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
          <ImageGalleryWhatWeDoTitle>
            {t('fifthSection.fourthLline.title')}
          </ImageGalleryWhatWeDoTitle>

          <ImageGalleryWhatWeDoSubtitle>
            <p className="w-6/12">{t('fifthSection.fourthLline.text')}</p>
          </ImageGalleryWhatWeDoSubtitle>
        </div>
      </div>
    </div>
  )
}
