import { cn } from '@/common/utils/cn'
import ArrowTop from '@/images/svg/arrowtop.svg'
import TitleLogo from '@/images/svg/titleLogo.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react'
import { GallerySection } from './common'

export default function WhatWeDo() {
  const t = useTranslations('WhatWeDo')

  const linksKeys = [
    'thirdSection.links.firstItem',
    'thirdSection.links.secondItem',
    'thirdSection.links.thirdItem',
    'thirdSection.links.fourthItem',
    'thirdSection.links.fifthItem',
    'thirdSection.links.sixItem'
  ]
  const hoverLinksKeys = [
    'thirdSection.hoverLinks.firstItem',
    'thirdSection.hoverLinks.secondItem',
    'thirdSection.hoverLinks.thirdItem',
    'thirdSection.hoverLinks.fourthItem',
    'thirdSection.hoverLinks.fifthItem',
    'thirdSection.hoverLinks.sixItem'
  ]

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
        <div>
          <span className="font-extrabold">{t('secondSection.span')}</span>
          <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />
        </div>

        <p className="absolute right-6 top-24 w-auto self-end text-sm font-semibold max-[490px]:text-xs sm:right-16 sm:self-start sm:text-lg lg:text-2xl">
          Do estratégico ao tático. Do tático ao <br /> operacional. Nossa
          oferta de serviços <br /> é construída a partir de uma <br />{' '}
          metodologia proprietária baseada em <br /> três pilares estratégicos.
        </p>

        <div className="relative h-auto w-full">
          <Image
            src={TitleLogo}
            alt="Título: É Faz Comunicação"
            style={{ height: 'auto', width: '100%' }}
          />
        </div>
      </section>

      <section className="relative flex w-full flex-col gap-10 bg-black px-6 py-10 sm:mb-20 sm:px-16">
        <div>
          <span className="font-extrabold text-white">
            {t('thirdSection.span')}
          </span>
          <hr className={cn('h-0.5 w-full border-0', 'bg-white')} />
        </div>

        <ul className="relative">
          {linksKeys.map((key, index) => {
            return (
              <Fragment key={key}>
                <li className="relative font-kernCompressed text-3xl font-bold text-white transition hover:text-primary hover:transition sm:text-6xl">
                  {t(key)}

                  <br />

                  <span className="absolute bottom-0 right-2 text-[0.55rem] text-white sm:bottom-2 sm:text-xs">
                    {t(hoverLinksKeys[index])}
                  </span>
                </li>

                <hr
                  className={cn(
                    'mb-6 h-0.5 w-full border-0',
                    'bg-gray-300 opacity-50'
                  )}
                />
              </Fragment>
            )
          })}
        </ul>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-10 px-2 py-10 text-black sm:px-4">
        <h2 className="ml-4 self-start font-kernCompressed text-5xl font-bold sm:mb-14 sm:ml-10 sm:text-5xl md:text-[4.7rem] md:leading-[4.7rem]">
          Lorem ipsum
        </h2>

        <GallerySection />
      </section>
    </Fragment>
  )
}
