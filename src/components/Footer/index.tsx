import { useTranslations } from 'next-intl'
import { TypographicLogo } from '../AnaCoutoMascot/TypographicLogo'
import { FooterBackground } from './FooterBackground'
import { FooterBase } from './FooterBase'
import { FooterContacts } from './FooterContacts'

export function Footer() {
  const t = useTranslations('Components.Footer')

  const titleKeys = [t('title.firstLine'), t('title.secondLine')]
  const addressKeys = [
    t('contacts.address.firstItem'),
    t('contacts.address.secondItem'),
    t('contacts.address.thirdItem'),
    t('contacts.address.fourthItem')
  ]
  const socialKeys = [
    {
      name: t('contacts.social.firstItem'),
      href: 'https://www.instagram.com/anacouto.ag/'
    },
    {
      name: t('contacts.social.secondItem'),
      href: 'https://www.youtube.com/c/AnaCouto_ag'
    },
    {
      name: t('contacts.social.thirdItem'),
      href: 'https://www.facebook.com/anacouto.ag'
    },
    {
      name: t('contacts.social.fourthItem'),
      href: 'https://www.linkedin.com/company/anacouto-ag'
    }
  ]
  const copyrightKeys = [
    t('contacts.copyright.firstItem'),
    t('contacts.copyright.secondItem')
  ]

  return (
    <FooterBase>
      <FooterBackground />

      <FooterContacts
        title={titleKeys}
        subtitle={t('subtitle')}
        address={addressKeys}
        social={socialKeys}
        copyright={copyrightKeys}
      />

      <TypographicLogo />
    </FooterBase>
  )
}
