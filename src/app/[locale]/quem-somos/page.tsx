import { cn } from '@/common/utils/cn'
import Chart from '@/images/svg/whoWeAreChart.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react'

export default function WhoWeAre() {
  const t = useTranslations('Contact')

  return (
    <Fragment>
      <section className="mb-40 flex w-full flex-col gap-10 px-20 py-10">
        <h1 className="w-3/5 font-kernCompressed text-8xl font-bold">
          {t('firstSection.title')}
        </h1>

        <p className="w-3/12 self-end text-2xl font-semibold">
          {t('firstSection.subtitle')}
        </p>
      </section>

      <section className="mb-20 flex w-full flex-col gap-10 px-20 py-10">
        <hr className={cn('h-0.5 w-full border-0', 'bg-gray-300')} />

        <div className="mb-32 flex justify-between">
          <h2 className="w-2/5 font-kernCompressed text-6xl font-bold">
            {t('secondSection.title')}
          </h2>

          <p className="w-3/12 text-2xl font-semibold">
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
    </Fragment>
  )
}
