import { ArticlesGalleryContainer } from '@/components/ArticlesGallery/ArticlesGalleryContainer'
import { ArrowMobile } from '@/components/arrowMobile'
import { Typography } from '@/components/ui/Typography'
import { Fragment } from 'react'

export default function Artigos() {
  return (
    <Fragment>
      <section className="flex w-full flex-col gap-10 px-6 py-10 sm:mb-40 sm:px-16">
        <div>
          <Typography as="h1">
            Lorem ipsum em <br />
            design gráfico e <br />
            editoração é um <br />
            texto padrão.
          </Typography>

          <div className="relative flex h-full w-full flex-col  justify-between">
            <div className="absolute -top-56 h-full  w-full -rotate-180 transform cursor-pointer md:-top-80">
              <ArrowMobile name={'arrowtop'} />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-40 flex w-full flex-col gap-10 px-1 py-10 sm:px-4">
        <ArticlesGalleryContainer />
      </section>
    </Fragment>
  )
}
