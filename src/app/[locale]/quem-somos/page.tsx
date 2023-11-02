import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

export default function WhoWeAre() {
  const t = useTranslations('Contact.firstSection')

  return (
    <Fragment>
      <section className="flex w-full flex-col gap-10 px-20 py-10">
        <h1 className="w-3/5 font-kernCompressed text-8xl font-semibold">
          {t('title')}
        </h1>

        <p className="w-3/12 self-end text-2xl">{t('subtitle')}</p>
      </section>

      <p>Oi</p>
    </Fragment>
  )
}
