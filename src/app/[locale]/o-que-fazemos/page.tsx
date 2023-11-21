import { cn } from '@/common/utils/cn'
import Dropdown from '@/components/Dropdown'
import TextAnimation from '@/components/TextAnimation'
import { WhoWeAreChart } from '@/components/WhoWeAreChart'
import { Typography } from '@/components/ui/Typography'
import ArrowTop from '@/images/svg/arrowtop.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react'
import { GallerySection } from './common'

export default function WhatWeDo() {
  const t = useTranslations('WhatWeDo')

  const linksKeys = [
    {
      title: 'thirdSection.links.firstItem',
      items: [
        'Estratégia Diagnóstico de Valor',
        'Plataforma de Branding',
        'Nome',
        'Design de Marca',
        'Universo Visual e Verbal',
        'Toolkit de Branding',
        'Gestão de Portfólio'
      ]
    },
    {
      title: 'thirdSection.links.secondItem',
      items: [
        'Jornada ON/OFF',
        'PDV',
        'Ambientação',
        'Soluções digitais',
        'Design System'
      ]
    },
    {
      title: 'thirdSection.links.thirdItem',
      items: ['Planejamento', 'Midia', 'Criação', 'Produção', 'Social']
    },
    {
      title: 'thirdSection.links.fourthItem',
      items: [
        'Transformação Cultural',
        'EVP_Marca Empregadora',
        'Desenvolvimento Liderança'
      ]
    },
    {
      title: 'thirdSection.links.fifthItem',
      items: [
        'Curso Branding Aplicado',
        'Curso Branding Essencial',
        'CBO',
        'Comunidade',
        'Newsletter',
        'Tip Talks'
      ]
    },
    {
      title: 'thirdSection.links.sixItem',
      items: [
        'Tracking do Branding',
        'Listening de social',
        'Dashboard de OKR',
        'Culturômetro'
      ]
    }
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
          Há 30 anos alinhamos marca, negócio e comunicação para fazer branding
          icônicos através do nosso método proprietário. Usamos toda a nossa
          potência de propósito para impulsionar o valor de pessoas e
          organizações.
        </p>
      </section>

      <section className="relative flex w-full flex-col gap-10 px-6 py-10 sm:px-16">
        <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />

        <div className="relative flex w-full flex-col justify-between gap-10 sm:mb-8 md:flex-row">
          <Typography as="h2">
            Como gerir o valor
            <br />
            do seu Branding?
          </Typography>

          <p className="w-auto max-w-[240px] self-end text-sm font-semibold sm:text-base md:self-start lg:max-w-[360px] lg:text-lg xl:text-2xl">
            As Ondas de Valor são um método proprietário anacouto para gerar e
            gerir valor de marcas. A Onda 3 representa as que se diferenciam na
            forma de relacionar com as pessoas.
          </p>
        </div>

        <WhoWeAreChart />
      </section>

      <section className="relative flex w-full flex-col gap-10 px-6 py-10 sm:mb-20 sm:px-16">
        <div>
          <span className="font-extrabold">{t('secondSection.span')}</span>
          <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />
        </div>

        <p className="absolute right-6 top-24 w-auto max-w-[220px] self-end text-sm font-semibold sm:right-16 sm:text-base lg:max-w-[360px] lg:text-lg xl:text-2xl">
          Geramos e gerimos valor. Da estratégia a execução. Da execução a
          gestão. Somos o ciclo completo e concreto de entregas a partir da
          nossa metodologia proprietária.
        </p>

        <div className="relative h-auto w-full">
          <TextAnimation
            newText="Marca"
            startText="É"
            className="mt-14 sm:mt-40"
          />
          <TextAnimation
            newText="Negócio"
            startText="FAZ"
            className="mt-14 sm:mt-60"
          />
          <TextAnimation
            newText="Comunicação"
            startText="FALA"
            className="mb-10 mt-14 sm:mb-20 sm:mt-60"
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
          {linksKeys.map((item, index) => (
            <Dropdown
              key={index}
              items={item.items}
              title={t(item.title)}
              startsOpen={index === 0}
            />
          ))}
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
