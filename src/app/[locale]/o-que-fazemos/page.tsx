import { cn } from '@/common/utils/cn'
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
      <section className="mb-40 flex w-full flex-col gap-10 px-6 py-10 sm:px-16">
        <h1 className="font-kernCompressed text-6xl font-bold sm:w-3/5 sm:text-6xl lg:text-8xl">
          {t('firstSection.title')}
        </h1>

        <p className="md:text-1xl self-end text-base font-semibold sm:text-lg md:w-3/12 lg:text-2xl">
          {t('firstSection.subtitle')}
        </p>
      </section>

      <section className="relative mb-20 flex w-full flex-col gap-10 px-6 py-10 sm:px-16">
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
                <li className="relative font-kernCompressed text-6xl font-bold text-white transition hover:text-primary hover:transition">
                  {t(key)}
                  <br />
                  <span className="relative bottom-2 right-2 text-xs text-white lg:absolute">
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

      <section className="flex w-full flex-col items-center justify-center gap-10 px-3 py-10 text-black sm:px-6">
        <h2 className="my-7 ml-7 self-start font-kernCompressed text-5xl font-bold sm:my-24 sm:ml-10 sm:text-4xl sm:text-5xl md:text-[4.7rem] md:leading-[4.7rem]">
          {t('fourthSection.title.firstLine')}
          <br />
          {t('fourthSection.title.secondLine')}
          <br />
          {t('fourthSection.title.thirdLine')}
          <br />
          {t('fourthSection.title.fourthLine')}
        </h2>

        <GallerySection />
      </section>
    </Fragment>
  )
}
