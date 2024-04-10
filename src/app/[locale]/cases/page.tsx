import { CasesGalleryContainer } from '@/components/CasesGallery/CasesGalleryContainer'
import StrapiTypography from '@/components/StrapiTypography'
import { Typography } from '@/components/ui/Typography'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

export default function Cases() {
  const t = useTranslations('Cases')

  return (
    <Fragment>
      <section
        className="flex w-full flex-col gap-10 px-6 py-10 sm:mb-40 sm:px-16"
        id={'twoSection'}
      >
        <StrapiTypography dataKey="ideas" as="h1">
          {t('sectionMessage')}
        </StrapiTypography>
      </section>

      <section className="mb-40 flex w-full flex-col gap-10 px-1 py-10 sm:px-4">
        <CasesGalleryContainer />
      </section>
    </Fragment>
  )
}
