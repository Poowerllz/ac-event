import { CasesGalleryContainer } from '@/components/CasesGallery/CasesGalleryContainer'
import { Typography } from '@/components/ui/Typography'
import { Fragment } from 'react'

export default async function Cases() {
  return (
    <Fragment>
      <section className="flex w-full flex-col gap-10 px-6 py-10 sm:mb-40 sm:px-16">
        <Typography as="h1">Criamos o extraordinário.</Typography>
      </section>

      <section className="mb-40 flex w-full flex-col gap-10 px-1 py-10 sm:px-4">
        <CasesGalleryContainer />
      </section>
    </Fragment>
  )
}
