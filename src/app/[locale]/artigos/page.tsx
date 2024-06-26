import { ArticlesGalleryContainer } from '@/components/ArticlesGallery/ArticlesGalleryContainer'
import StrapiTypography from '@/components/StrapiTypography'
import { ArrowMobile } from '@/components/arrowMobile'
import { Typography } from '@/components/ui/Typography'
import ArrowTop from '@/images/svg/arrowtop.svg'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

export default function Artigos() {
  const t = useTranslations('Articles')

  return (
    <Fragment>
      <section
        className="flex w-full flex-col gap-10 px-6 py-10 sm:mb-40 sm:px-16"
        id={'twoSection'}
      >
        <div className="flex w-full items-start justify-between">
          <div className="w-full sm:w-4/5 md:w-4/5 lg:w-4/6 xl:w-1/2">
            <StrapiTypography dataKey="ideas" as="h1">
              {t('sectionMessage')}
            </StrapiTypography>
          </div>

          <div className="relative flex h-full items-start">
            <div className="flex h-full w-full transform cursor-pointer items-start">
              <ArrowMobile name={ArrowTop} section={'header'} />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-40 flex w-full flex-col  gap-4 px-1 py-10 sm:px-4">
        <ArticlesGalleryContainer />
      </section>
    </Fragment>
  )
}
