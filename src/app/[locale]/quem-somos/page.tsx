import { ArrowMobile } from '@/components/arrowMobile'
import { Typography } from '@/components/ui/Typography'
import ArrowTop from '@/images/svg/arrowtop.svg'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import { ExecutiveTeamSection, GallerySection } from './common'
import StrapiTypography from '@/components/StrapiTypography'

export default function WhoWeAre() {
  const t = useTranslations('WhoWeAre')

  return (
    <Fragment>
      <section
        className="relative flex h-screen w-full flex-col gap-10 px-6 sm:px-16 sm:py-10"
        id="twoSection"
      >
        <div className="absolute right-6 top-6 cursor-pointer sm:right-16">
          <ArrowMobile name={ArrowTop} section={'header'} />
        </div>

        <StrapiTypography as="h1" className="pt-14" dataKey="who_we_are">
          <>
            {t('firstSection.titleOne')}
            <br />
            {t('firstSection.titleTwo')}
            <br />
            {t('firstSection.titleThree')}
          </>
        </StrapiTypography>

        <StrapiTypography
          as={'p'}
          dataKey="years"
          boxClass={'flex justify-end'}
          className="w-auto max-w-[240px] self-end text-sm font-semibold sm:text-base lg:max-w-[360px] lg:text-lg xl:text-2xl"
        >
          {t('firstSection.subtitle')}
        </StrapiTypography>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-10 bg-black px-2 py-10 text-white sm:px-4">
        <StrapiTypography
          as="h2"
          className="py-24 text-center md:text-[4.7rem] md:leading-[4.7rem]"
          dataKey="what_we_do"
        >
          {t('secondSection.titleOne')}
          <br />
          {t('secondSection.titleTwo')}
          <br />
          {t('secondSection.titleThree')}
        </StrapiTypography>
        <GallerySection />
      </section>

      <section className="mb-2 w-full flex-col gap-10 px-2 sm:px-4 sm:py-10">
        <StrapiTypography
          as="h2"
          className="px-4 py-14 sm:px-12 md:text-[4.7rem] md:leading-[4.7rem]"
          animation={false}
          dataKey="time"
        >
          {t('fourthSection.title')}
        </StrapiTypography>

        <ExecutiveTeamSection />
      </section>
    </Fragment>
  )
}
