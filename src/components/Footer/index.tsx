import { cn } from '@/common/utils/cn'
import Logo from '@/images/svg/logo.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { AnaCoutoMascot } from '../AnaCoutoMascot'
import { FooterBackground } from './FooterBackground'
import { FooterBase } from './FooterBase'

export function Footer() {
  const t = useTranslations('Components.Footer')

  const titleKeys = ['title.firstLine', 'title.secondLine']
  const addressKeys = [
    'contacts.address.firstItem',
    'contacts.address.secondItem',
    'contacts.address.thirdItem',
    'contacts.address.fourthItem'
  ]
  const socialKeys = [
    {
      name: 'contacts.social.firstItem',
      href: 'https://www.instagram.com/anacouto.ag/'
    },
    {
      name: 'contacts.social.secondItem',
      href: 'https://www.youtube.com/c/AnaCouto_ag'
    },
    {
      name: 'contacts.social.thirdItem',
      href: 'https://www.facebook.com/anacouto.ag'
    },
    {
      name: 'contacts.social.fourthItem',
      href: 'https://www.linkedin.com/company/anacouto-ag'
    }
  ]
  const copyrightKeys = [
    'contacts.copyright.firstItem',
    'contacts.copyright.secondItem'
  ]

  return (
    <FooterBase>
      <FooterBackground />

      <div className="z-10 flex w-full flex-col justify-between gap-10 px-6 py-10 sm:px-16 lg:flex-row">
        <div className="flex flex-col">
          <div className="relative mb-5 h-auto w-10">
            <AnaCoutoMascot />
          </div>

          <p className="mb-10 font-kernCompressed text-4xl font-semibold">
            {t(titleKeys[0])}
            <br />
            {t(titleKeys[1])}
          </p>

          <span className="text-xl font-normal">{t('subtitle')}</span>
          <hr className={cn('h-0.5 w-full border-0', 'bg-white')} />
        </div>

        <div className="mr-24 flex flex-wrap justify-between gap-10 sm:mr-0 sm:h-2/4 sm:flex-row sm:gap-20">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">São Paulo</span>
            {addressKeys.map(key => {
              return (
                <span key={key} className="text-sm">
                  {t(key)}
                </span>
              )
            })}
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">E-mail</span>
            {socialKeys.map(key => {
              return (
                <Link
                  href={key.href}
                  key={key.name}
                  target="_blank"
                  className="text-sm transition hover:text-primary hover:transition"
                >
                  {t(key.name)}
                </Link>
              )
            })}
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-sm font-semibold">© 2023 Ana Couto</span>

            <div className="flex flex-col gap-1">
              {copyrightKeys.map(key => {
                return (
                  <span key={key} className="text-sm">
                    {t(key)}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-auto w-full px-6 py-10 sm:px-16">
        <Image
          property="true"
          src={Logo}
          alt="Logo com a escrita Ana Couto"
          style={{ height: 'auto', width: '100%' }}
        />
      </div>
    </FooterBase>
  )
}
