import { cn } from '@/common/utils/cn'
import { WhoWeAreChart } from '@/components/WhoWeAreChart'
import ArrowTop from '@/images/svg/arrowtop.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react'
import { ExecutiveTeamSection, GallerySection } from './common'

export default function WhoWeAre() {
  const t = useTranslations('WhoWeAre')

  return (
    <Fragment>
      <section className="relative flex w-full flex-col gap-10 px-6 py-10 sm:px-16 md:mb-40">
        <div className="absolute right-6 top-6 sm:right-16">
          <Image
            src={ArrowTop}
            alt="Jump To Top"
            className="h-[34.92px] sm:h-[52.38px]"
          />
        </div>

        <h1 className="mt-12 w-auto font-kernCompressed text-5xl font-bold sm:mt-0 sm:text-6xl lg:text-7xl xl:text-8xl">
          Lorem ipsum em <br />
          design gráfico e <br />
          editoração é um <br />
          texto padrão.
        </h1>

        <p className="w-auto self-end text-sm font-semibold sm:text-base lg:text-lg xl:text-2xl">
          Desenvolvemos Estratégias de <br /> Marca e Publicidade para criar um
          <br /> alinhamento perfeito entre Marca, <br /> Negócio, Comunicação e
          Cultura.
        </p>
      </section>

      <section className="relative flex w-full flex-col gap-10 px-6 py-10 sm:mb-20 sm:px-16">
        <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />

        <div className="relative flex w-full flex-col justify-between gap-10 sm:mb-32 md:flex-row">
          <h2 className="w-auto font-kernCompressed text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl">
            O futuro de uma
            <br />
            marca está em seu
            <br />
            propósito hoje
          </h2>

          <p className="w-auto self-end text-sm font-semibold sm:text-base md:self-start lg:text-lg xl:text-2xl">
            As Marcas que mais geram valor para o <br /> negócio estão no
            patamar da onda 3 e <br /> se diferenciam na forma como se <br />
            relacionam com as pessoas.
          </p>
        </div>

        <WhoWeAreChart />
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-10 bg-black px-2 py-10 text-white sm:px-4">
        <h2 className="my-24 text-center font-kernCompressed text-4xl font-bold sm:text-5xl md:text-[4.7rem] md:leading-[4.7rem]">
          {t('thirdSection.title.firstLine')}
          <br />
          {t('thirdSection.title.secondLine')}
          <br />
          {t('thirdSection.title.thirdLine')}
          <br />
          {t('thirdSection.title.fourthLine')}
        </h2>

        <GallerySection />
      </section>

      <section className="mb-4 w-full flex-col gap-10 px-2 sm:px-4 sm:py-10">
        <h2 className="my-12 ml-4 font-kernCompressed text-4xl font-bold sm:text-5xl md:text-[4.7rem] md:leading-[4.7rem]">
          {t('fourthSection.title')}
        </h2>

        <ExecutiveTeamSection />
      </section>
    </Fragment>
  )
}
