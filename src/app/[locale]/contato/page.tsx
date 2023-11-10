import { ContactForm } from '@/components/ContactForm'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Contact() {
  const t = useTranslations('Contact')
  const addressKeys = [
    'firstSection.contacts.address.firstItem',
    'firstSection.contacts.address.secondItem',
    'firstSection.contacts.address.thirdItem',
    'firstSection.contacts.address.fourthItem'
  ]
  const socialKeys = [
    {
      name: 'firstSection.contacts.social.firstItem',
      href: 'https://www.instagram.com/anacouto.ag/'
    },
    {
      name: 'firstSection.contacts.social.secondItem',
      href: 'https://www.youtube.com/c/AnaCouto_ag'
    },
    {
      name: 'firstSection.contacts.social.thirdItem',
      href: 'https://www.facebook.com/anacouto.ag'
    },
    {
      name: 'firstSection.contacts.social.fourthItem',
      href: 'https://www.linkedin.com/company/anacouto-ag'
    }
  ]
  const copyrightKeys = [
    'firstSection.contacts.copyright.firstItem',
    'firstSection.contacts.copyright.secondItem'
  ]

  const people = [
    {
      area: 'Novos negócios',
      members: [
        {
          name: 'Rodrigo',
          office: 'Analista de novos negócios',
          email: 'rlima@anacouto.com.br',
          tel: '11 95942-3304'
        }
      ]
    },
    {
      area: 'Marketing e Assesoria',
      members: [
        {
          name: 'Bruno Assis',
          office: 'Gerente de Marketing',
          email: 'xbassis@anacouto.com.br',
          tel: ''
        }
      ]
    },
    {
      area: 'Mídia',
      members: [
        {
          name: 'Marcelle Villar',
          office: 'Sócia diretora de mídia',
          email: 'mvillar@anacouto.com.br',
          tel: ''
        },
        {
          name: 'Priscilla Menezes',
          office: 'Gerente de mídia',
          email: 'pmenezes@anacouto.com.br',
          tel: ''
        }
      ]
    }
  ]

  return (
    <Fragment>
      <section className="mb-40 flex w-full flex-col gap-10 px-6 py-10 sm:px-16 min-[895px]:flex-row">
        <div className="flex w-full flex-col gap-10">
          <h1 className="font-kernCompressed text-6xl font-bold sm:w-3/5 xl:text-7xl 2xl:text-8xl">
            {t('firstSection.title.firstLine')}
            <br />
            {t('firstSection.title.secondLine')}
            <br />
            {t('firstSection.title.thirdLine')}
          </h1>

          <div className="mr-24 flex flex-wrap gap-10 sm:mr-0 sm:h-2/4 sm:flex-row sm:gap-20">
            <div className="flex flex-col gap-1 font-bold">
              <span className="text-xs font-bold">São Paulo</span>
              {addressKeys.map(key => {
                return (
                  <span key={key} className="text-xs">
                    {t(key)}
                  </span>
                )
              })}
            </div>

            <div className="flex flex-col gap-1 font-bold">
              <span className="text-xs">E-mail</span>
              {socialKeys.map(key => {
                return (
                  <Link
                    href={key.href}
                    key={key.name}
                    target="_blank"
                    className="text-xs transition hover:text-primary hover:transition"
                  >
                    {t(key.name)}
                  </Link>
                )
              })}
            </div>

            <div className="flex flex-col gap-1 font-bold">
              {copyrightKeys.map(key => {
                return (
                  <span key={key} className="text-xs">
                    {t(key)}
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex w-1/2 flex-col justify-between gap-10">
          {people.map(people => (
            <div key={people.area}>
              <h4 className="mb-5 text-base font-bold">{people.area}</h4>
              {people.members.map(member => {
                return (
                  <Fragment key={member.name}>
                    <h2 className="font-kernCompressed text-4xl font-bold">
                      {member.name}
                    </h2>
                    <p className="mb-5">{member.office}</p>
                    <p>{member.email}</p>
                    <p>{member.tel}</p>
                  </Fragment>
                )
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-10 bg-black px-6 py-10 text-white sm:px-16">
        <div className="flex w-full max-w-[1080px] flex-col gap-6">
          <h2 className="font-kernCompressed text-3xl font-bold sm:text-5xl">
            {t('secondSection.form.title.firstLine')}
            <br />
            {t('secondSection.form.title.secondLine')}
          </h2>

          <ContactForm />
        </div>
      </section>
    </Fragment>
  )
}
