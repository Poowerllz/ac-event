import { cn } from '@/common/utils/cn'
import Chart from '@/images/svg/whoWeAreChart.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react'
import { ExecutiveTeamSection, GallerySection } from './common'

export default function WhoWeAre() {
  const t = useTranslations('Contact')

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

      <section className="mb-20 flex w-full flex-col gap-10 px-5 py-10 md:px-10 lg:px-20">
        <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />

        <div className="mb-32 flex flex-col justify-between gap-10 sm:flex-row">
          <h2 className="font-kernCompressed text-4xl font-bold sm:w-2/5 sm:text-6xl">
            {t('secondSection.title')}
          </h2>

          <p className="md:text-1xl text-base font-semibold sm:w-3/12 sm:text-lg lg:text-2xl">
            {t('secondSection.subtitle')}
          </p>
        </div>

        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={Chart}
            alt="Orgonograma de como a Ana Couto vê o desenvolvimento de uma marca"
            style={{ height: 'auto', width: '100%' }}
          />
        </div>
      </section>

      <section className="mb-20 flex w-full flex-col items-center justify-center gap-10 bg-black px-5 py-10 text-white md:px-10 lg:px-20">
        <h2 className="my-32 text-center font-kernCompressed text-4xl font-bold sm:text-6xl md:w-2/5">
          {t('thirdSection.title')}
        </h2>
        <div>
          <GallerySection />
        </div>
      </section>

      <section className="mb-20 flex w-full flex-col gap-10 px-5 py-10 md:px-10 lg:px-20">
        <h2 className="font-kernCompressed text-4xl font-bold sm:text-6xl md:w-2/5">
          {t('fourthSection.title')}
        </h2>

        <ExecutiveTeamSection />
      </section>
    </Fragment>
  )
}
