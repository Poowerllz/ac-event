import { cn } from '@/common/utils/cn'
import TitleLogo from '@/images/svg/titleLogo.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react'

export default function WhatWeDo() {
  const t = useTranslations('WhatWeDo')

  return (
    <Fragment>
      <section className="mb-40 flex w-full flex-col gap-10 px-5 py-10 md:px-10 lg:px-20">
        <h1 className="font-kernCompressed text-6xl font-bold sm:w-3/5 sm:text-6xl lg:text-8xl">
          {t('firstSection.title')}
        </h1>

        <p className="md:text-1xl self-end text-base font-semibold sm:text-lg md:w-3/12 lg:text-2xl">
          {t('firstSection.subtitle')}
        </p>
      </section>

      <section className="relative mb-20 flex w-full flex-col gap-10 px-5 py-10 md:px-10 lg:px-20">
        <div>
          <span className="font-extrabold">{t('secondSection.span')}</span>
          <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />
        </div>

        <p className="md:text-1xl relative w-2/4 self-end text-base font-semibold sm:text-lg md:absolute md:top-24 md:w-3/12 lg:text-2xl">
          {t('secondSection.subtitle')}
        </p>

        <div className="relative h-auto w-full">
          <Image
            src={TitleLogo}
            alt="Título: É Faz Comunicação"
            style={{ height: 'auto', width: '100%' }}
          />
        </div>
      </section>

      <section className="relative mb-20 flex w-full flex-col gap-10 bg-black px-5 py-10 md:px-10 lg:px-20">
        <div>
          <span className="font-extrabold text-white">
            {t('thirdSection.span')}
          </span>
          <hr className={cn('h-0.5 w-full border-0', 'bg-white')} />
        </div>
      </section>
    </Fragment>
  )
}
