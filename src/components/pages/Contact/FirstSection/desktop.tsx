import { Typography } from '@/components/ui/Typography'
import Link from 'next/link'
import { Fragment } from 'react'
import { FirstSectionProps } from './types'

export function FirstSectionDesktop({
  title,
  address,
  social,
  copyright
}: FirstSectionProps) {
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
      <div className="mt-12 flex w-full flex-col gap-10 sm:mt-0">
        <Typography
          as="h1"
          className="text-6xl sm:w-3/5 xl:text-7xl 2xl:text-8xl"
        >
          {title[0]}
          <br />
          {title[1]}
          <br />
          {title[2]}
        </Typography>

        <div className="mr-24 flex flex-wrap gap-10 sm:mr-0 sm:h-2/4 sm:flex-row sm:gap-20">
          <div className="flex flex-col gap-1 font-bold">
            <span className="text-xs font-bold">São Paulo</span>
            <span className="text-sm">{address[0]}</span>
            <span className="text-sm">{address[1]}</span>
            <span className="text-sm">{address[2]}</span>
            <span className="text-sm">{address[3]}</span>
          </div>

          <div className="flex flex-col gap-1 font-bold">
            <span className="text-sm font-semibold">E-mail</span>

            <Link
              href={social[0].href}
              target="_blank"
              className="text-sm transition hover:text-primary hover:transition"
            >
              {social[0].name}
            </Link>

            <Link
              href={social[1].href}
              target="_blank"
              className="text-sm transition hover:text-primary hover:transition"
            >
              {social[1].name}
            </Link>

            <Link
              href={social[2].href}
              target="_blank"
              className="text-sm transition hover:text-primary hover:transition"
            >
              {social[2].name}
            </Link>

            <Link
              href={social[3].href}
              target="_blank"
              className="text-sm transition hover:text-primary hover:transition"
            >
              {social[3].name}
            </Link>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm">{copyright[0]}</span>
            <span className="text-sm">{copyright[1]}</span>
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
    </Fragment>
  )
}
