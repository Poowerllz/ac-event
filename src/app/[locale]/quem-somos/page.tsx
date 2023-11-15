import { cn } from '@/common/utils/cn'
import { WhoWeAreChart } from '@/components/WhoWeAreChart'
import { Typography } from '@/components/ui/Typography'
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

        <Typography as="h1">
          Lorem ipsum em <br />
          design gráfico e <br />
          editoração é um <br />
          texto padrão.
        </Typography>

        <p className="w-auto max-w-[240px] self-end text-sm font-semibold sm:text-base lg:max-w-[360px] lg:text-lg xl:text-2xl">
          Desenvolvemos Estratégias de Marca e Publicidade para criar um
          alinhamento perfeito entre Marca, Negócio, Comunicação e Cultura.
        </p>
      </section>

      <section className="relative flex w-full flex-col gap-10 px-6 py-10 sm:mb-20 sm:px-16">
        <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />

        <div className="relative flex w-full flex-col justify-between gap-10 sm:mb-32 md:flex-row">
          <Typography as="h2">
            O futuro de uma
            <br />
            marca está em seu
            <br />
            propósito hoje
          </Typography>

          <p className="w-auto max-w-[240px] self-end text-sm font-semibold sm:text-base md:self-start lg:max-w-[360px] lg:text-lg xl:text-2xl">
            As Marcas que mais geram valor para o negócio estão no patamar da
            onda 3 e se diferenciam na forma como se relacionam com as pessoas.
          </p>
        </div>

        <WhoWeAreChart />
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-10 bg-black px-2 py-10 text-white sm:px-4">
        <Typography
          as="h2"
          className="py-24 text-center md:text-[4.7rem] md:leading-[4.7rem]"
        >
          {t('thirdSection.title.firstLine')}
          <br />
          {t('thirdSection.title.secondLine')}
          <br />
          {t('thirdSection.title.thirdLine')}
          <br />
          {t('thirdSection.title.fourthLine')}
        </Typography>
        <GallerySection />
      </section>

      <section className="mb-4 w-full flex-col gap-10 px-2 sm:px-4 sm:py-10">
        <Typography
          as="h2"
          className="py-24 md:text-[4.7rem] md:leading-[4.7rem]"
        >
          {t('fourthSection.title')}
        </Typography>

        <ExecutiveTeamSection />
      </section>
    </Fragment>
  )
}
