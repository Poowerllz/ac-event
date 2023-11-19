import { ContactForm } from '@/components/ContactForm'
import { ContactSections } from '@/components/pages/Contact'
import { Typography } from '@/components/ui/Typography'
import ArrowTop from '@/images/svg/arrowtop.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Script from 'next/script'
import { Fragment } from 'react'

export default function Contact() {
  const t = useTranslations('Contact')

  const titleKeys = [
    t('firstSection.title.firstLine')
    // t('firstSection.title.secondLine'),
    // t('firstSection.title.thirdLine')
  ]
  const addressKeys = [
    t('firstSection.contacts.address.firstItem'),
    t('firstSection.contacts.address.secondItem'),
    t('firstSection.contacts.address.thirdItem'),
    t('firstSection.contacts.address.fourthItem')
  ]
  const socialKeys = [
    {
      name: t('firstSection.contacts.social.firstItem'),
      href: 'https://www.instagram.com/anacouto.ag/'
    },
    {
      name: t('firstSection.contacts.social.secondItem'),
      href: 'https://www.youtube.com/c/AnaCouto_ag'
    },
    {
      name: t('firstSection.contacts.social.thirdItem'),
      href: 'https://www.facebook.com/anacouto.ag'
    },
    {
      name: t('firstSection.contacts.social.fourthItem'),
      href: 'https://www.linkedin.com/company/anacouto-ag'
    }
  ]
  const copyrightKeys = [
    t('firstSection.contacts.copyright.firstItem'),
    t('firstSection.contacts.copyright.secondItem')
  ]

  return (
    <Fragment>
      <section className="relative flex w-full flex-col gap-10 px-6 py-10 max-[393px]:px-3 sm:mb-40 sm:px-16 min-[895px]:flex-row">
        <div className="absolute right-6 top-6 sm:right-16">
          <Image
            src={ArrowTop}
            alt="Jump To Top"
            className="h-[34.92px] sm:h-[52.38px]"
          />
        </div>

        <ContactSections.First
          title={titleKeys}
          address={addressKeys}
          copyright={copyrightKeys}
          social={socialKeys}
        />
      </section>

      <section className="flex w-full flex-col items-center gap-10 bg-black px-6 py-10 text-white max-[393px]:px-3 sm:px-16">
        <div className="flex  max-w-[1080px] flex-col gap-6">
          <Typography as="h2" className="text-3xl" animation={false}>
            {t('secondSection.form.title.firstLine')}
            <br />
            {t('secondSection.form.title.secondLine')}
          </Typography>

          <ContactForm />
        </div>
      </section>
    </Fragment>
  )
}
