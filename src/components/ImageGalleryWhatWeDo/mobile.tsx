'use client'

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
    <div className="flex h-full w-full flex-col content-stretch items-stretch justify-center gap-2 md:gap-4">
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
            {t('fifthSection.firstLine.text')}
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
            {t('fifthSection.secondLine.text')}
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
            {t('fifthSection.thirdLine.text')}
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
            {t('fifthSection.fourthLline.text')}
          </ImageGalleryWhatWeDoSubtitle>
        </div>
      </div>
    </div>
  )
}
