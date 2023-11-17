import { cn } from '@/common/utils/cn'
import { Typography } from '@/components/ui/Typography'
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
    'thirdSection.links.fifthItem',
    'thirdSection.links.sixItem'
  ]
  const hoverLinksKeys = [
    'thirdSection.hoverLinks.firstItem',
    'thirdSection.hoverLinks.secondItem',
    'thirdSection.hoverLinks.thirdItem',
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

        <Typography as="h1">
          Somos a anacouto. <br />
          Somos branding <br />e comunicação.
        </Typography>

        <p className="w-auto max-w-[220px] self-end text-sm font-semibold sm:text-base lg:max-w-[360px] lg:text-lg xl:text-2xl">
          Há 30 anos alinhamos marca, negócio e comunicação para fazer criações
          icônicas através do nosso método proprietário. Usamos toda a nossa
          potência de propósito para impulsionar o valor de pessoas e
          organizações.
        </p>
      </section>

      <section className="relative flex w-full flex-col gap-10 px-6 py-10 sm:mb-20 sm:px-16">
        <div>
          <span className="font-extrabold">{t('secondSection.span')}</span>
          <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />
        </div>

        <p className="absolute right-6 top-24 w-auto max-w-[220px] self-end text-sm font-semibold sm:right-16 sm:text-base lg:max-w-[360px] lg:text-lg xl:text-2xl">
          Do estratégico ao tático. Do tático ao operacional. Somos o ciclo
          completo e concreto de entregas a partir da nossa metodologia
          proprietária.
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
        <Typography
          as="h2"
          className="self-start pl-4 sm:pb-14 sm:pl-10 md:text-[4.7rem] md:leading-[4.7rem]"
          animation={false}
        >
          Fazer junto para encantar e impulsionar.
        </Typography>

        <GallerySection />
      </section>
    </Fragment>
  )
}
