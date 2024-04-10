import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ImageGalleryWhoWeAreProps } from './type'
import StrapiTypography from '../StrapiTypography'

export function ImageGalleryWhoWeAreDesktop({
  images,
  text
}: ImageGalleryWhoWeAreProps) {
  const t = useTranslations('WhoWeAre')
  return (
    <div className="hidden h-full w-full grid-cols-4 content-stretch items-stretch justify-center gap-2 sm:grid md:gap-4">
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

        <StrapiTypography dataKey="proposit" className="text-2xl leading-none">
          {t('secondSection.gallery.titleOne1')}
          <br />
          {t('secondSection.gallery.titleOne2')}
          <br />
          {t('secondSection.gallery.titleOne3')}
        </StrapiTypography>
      </div>

      <div className="flex flex-col gap-5 self-end">
        <StrapiTypography
          dataKey="experience"
          className="hidden text-2xl leading-none md:flex"
        >
          {t('secondSection.gallery.titleTwo1')}
          <br />
          {t('secondSection.gallery.titleTwo2')}
          <br />
          {t('secondSection.gallery.titleTwo3')}
        </StrapiTypography>

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

        <StrapiTypography
          dataKey="narratives"
          className="text-2xl leading-none"
        >
          {t('secondSection.gallery.titleThree1')}
          <br />
          {t('secondSection.gallery.titleThree2')}
          <br />
          {t('secondSection.gallery.titleThree3')}
          <br />
          {t('secondSection.gallery.titleThree4')}
        </StrapiTypography>
      </div>
    </div>
  )
}
