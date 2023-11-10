import { CasesGalleryContainer } from '@/components/CasesGallery/CasesGalleryContainer'
import More from '@/images/svg/more.svg'
import Image from 'next/image'
import { Fragment } from 'react'

export default async function Cases() {
  return (
    <Fragment>
      <section className="flex w-full flex-col gap-10 px-6 py-10 sm:mb-40 sm:px-16">
        <h1 className="font-kernCompressed text-5xl font-bold sm:w-3/5 sm:text-6xl lg:text-8xl">
          Lorem ipsum em <br />
          design gráfico e <br />
          editoração é um <br />
          texto padrão.
        </h1>

        <button className="flex items-center justify-center gap-2 self-start">
          <Image src={More} alt="More Icon" width={24} height={24} />
          <span className="font-bold leading-3">Filtrar por cases</span>
        </button>
      </section>

      <section className="mb-40 flex w-full flex-col gap-10 px-1 py-10 sm:px-4">
        <CasesGalleryContainer />
      </section>
    </Fragment>
  )
}
