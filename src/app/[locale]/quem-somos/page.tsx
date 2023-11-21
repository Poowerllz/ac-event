import { Typography } from '@/components/ui/Typography'
import ArrowTop from '@/images/svg/arrowtop.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react'
import { ExecutiveTeamSection, GallerySection } from './common'
import { ArrowMobile } from '@/components/arrowMobile'

export default function WhoWeAre() {
  const t = useTranslations('WhoWeAre')

  return (
    <Fragment>
      <section
        className="relative flex w-full flex-col gap-10 px-6 py-10 sm:px-16"
        id="twoSection"
      >
        <div className="absolute right-6 top-6 cursor-pointer sm:right-16">
          <ArrowMobile name={ArrowTop} section={'header'} />
        </div>

        <Typography as="h1">
          Somos a anacouto.
          <br />
          Somos branding
          <br />e comunicação.
        </Typography>

        <p className="w-auto max-w-[240px] self-end text-sm font-semibold sm:text-base lg:max-w-[360px] lg:text-lg xl:text-2xl">
          Há 30 anos alinhamos marca, negócio e comunicação para fazer branding
          icônicos através do nosso método proprietário. Usamos toda a nossa
          potência de propósito para impulsionar o valor de pessoas e
          organizações.
        </p>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-10 bg-black px-2 py-10 text-white sm:px-4">
        <Typography
          as="h2"
          className="py-24 text-center md:text-[4.7rem] md:leading-[4.7rem]"
        >
          {/* {t('thirdSection.title.firstLine')}
          <br />
          {t('thirdSection.title.secondLine')}
          <br />
          {t('thirdSection.title.thirdLine')}
          <br />
          {t('thirdSection.title.fourthLine')} */}
          Fazemos a (r)evolução
          <br />
          que a sua organização
          <br />
          precisa
        </Typography>
        <GallerySection />
      </section>

      <section className="mb-4 w-full flex-col gap-10 px-2 sm:px-4 sm:py-10">
        <Typography
          as="h2"
          className="py-14 md:text-[4.7rem] md:leading-[4.7rem]"
          animation={false}
        >
          {t('fourthSection.title')}
        </Typography>

        <ExecutiveTeamSection />
      </section>
    </Fragment>
  )
}
