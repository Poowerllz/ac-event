import { cn } from '@/common/utils/cn'
import Dropdown from '@/components/Dropdown'
import TextAnimation from '@/components/TextAnimation'
import { WhoWeAreChart } from '@/components/WhoWeAreChart'
import { ArrowMobile } from '@/components/arrowMobile'
import { Typography } from '@/components/ui/Typography'
import ArrowTop from '@/images/svg/arrowtop.svg'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import { GallerySection } from './common'

export default function WhatWeDo() {
  const t = useTranslations('WhatWeDo')

  const linksKeys = [
    {
      title: 'fourthSection.links.firstItem.title',
      items: [
        t('fourthSection.links.firstItem.textOne'),
        t('fourthSection.links.firstItem.textTwo'),
        t('fourthSection.links.firstItem.textThree'),
        t('fourthSection.links.firstItem.textFour'),
        t('fourthSection.links.firstItem.textFive'),
        t('fourthSection.links.firstItem.textSix'),
        t('fourthSection.links.firstItem.textSeven')
      ]
    },
    {
      title: 'fourthSection.links.secondItem.title',
      items: [
        t('fourthSection.links.secondItem.textOne'),
        t('fourthSection.links.secondItem.textTwo'),
        t('fourthSection.links.secondItem.textThree'),
        t('fourthSection.links.secondItem.textFour'),
        t('fourthSection.links.secondItem.textFive')
      ]
    },
    {
      title: 'thirdSection.links.fourthItem.title',
      items: [
        t('fourthSection.links.thirdItem.textOne'),
        t('fourthSection.links.thirdItem.textTwo'),
        t('fourthSection.links.thirdItem.textThree'),
        t('fourthSection.links.thirdItem.textFour'),
        t('fourthSection.links.thirdItem.textFive')
      ]
    },
    {
      title: 'thirdSection.links.fourthItem.title',
      items: [
        t('fourthSection.links.fourthItem.textOne'),
        t('fourthSection.links.fourthItem.textTwo'),
        t('fourthSection.links.fourthItem.textThree')
      ]
    },
    {
      title: 'thirdSection.links.fifthItem.title',
      items: [
        t('fourthSection.links.fifthItem.textOne'),
        t('fourthSection.links.fifthItem.textTwo'),
        t('fourthSection.links.fifthItem.textThree'),
        t('fourthSection.links.fifthItem.textFour'),
        t('fourthSection.links.fifthItem.textFive'),
        t('fourthSection.links.fifthItem.textSix')
      ]
    },
    {
      title: 'thirdSection.links.sixItem.title',
      items: [
        t('fourthSection.links.sixItem.textTwo'),
        t('fourthSection.links.sixItem.textThree'),
        t('fourthSection.links.sixItem.textFour'),
        t('fourthSection.links.sixItem.textFive')
      ]
    }
  ]

  return (
    <Fragment>
      <section
        className="relative flex h-screen w-full flex-col gap-10 px-6 py-10 sm:px-16 md:mb-40"
        id={'twoSection'}
      >
        <div className="absolute right-6 top-6 cursor-pointer sm:right-16">
          <ArrowMobile name={ArrowTop} section={'header'} />
        </div>

        <Typography as="h1">{t('firstSection.title')}</Typography>

        <p className="w-auto max-w-[220px] self-end text-sm font-semibold sm:text-base lg:max-w-[360px] lg:text-lg xl:text-2xl">
          {t('firstSection.subtitle')}
        </p>
      </section>

      <section className="relative flex w-full flex-col gap-10 bg-black px-6 py-10 text-white sm:px-16">
        <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />

        <div className="relative flex w-full flex-col justify-between gap-10 sm:mb-8 md:flex-row">
          <Typography as="h2">{t('secondSection.title')}</Typography>

          <p className="w-auto max-w-[240px] self-end text-sm font-semibold sm:text-base md:self-start lg:max-w-[360px] lg:text-lg xl:text-2xl">
            {t('secondSection.subtitle')}
          </p>
        </div>

        <WhoWeAreChart />
      </section>

      <section className="relative flex h-screen w-full flex-col gap-10 px-6 py-10 sm:mb-20 sm:px-16">
        <div>
          <span className="font-extrabold">{t('thirdSection.span')}</span>
          <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />
        </div>

        <p className="absolute right-6 top-24 w-auto max-w-[220px] self-end text-sm font-semibold sm:right-16 sm:text-base lg:max-w-[360px] lg:text-lg xl:text-2xl">
          {t('thirdSection.subtitle')}
        </p>

        <div className="relative h-auto w-full">
          <TextAnimation
            newText={t('thirdSection.title.One.newText')}
            startText={t('thirdSection.title.One.startText')}
            className="mt-14 sm:mt-40"
          />
          <TextAnimation
            newText={t('thirdSection.title.Two.newText')}
            startText={t('thirdSection.title.Two.startText')}
            className="mt-14 sm:mt-60"
          />
          <TextAnimation
            newText={t('thirdSection.title.Three.newText')}
            startText={t('thirdSection.title.Three.startText')}
            className="mb-10 mt-14 sm:mb-20 sm:mt-60"
          />
        </div>
      </section>

      <section className="relative flex w-full flex-col gap-10 bg-black px-6 py-10 sm:mb-20 sm:px-16">
        <div>
          <span className="font-extrabold text-white">
            {t('fourthSection.span')}
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
          className="text-center sm:pb-14 md:text-[4.7rem] md:leading-[4.7rem]"
          animation={false}
        >
          {t('fifthSection.title')}
        </Typography>

        <GallerySection />
      </section>
    </Fragment>
  )
}
