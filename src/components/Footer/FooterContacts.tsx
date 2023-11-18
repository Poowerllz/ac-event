'use client'

import { cn } from '@/common/utils/cn'
import { getPathData } from '@/common/utils/getPathData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnaCoutoMascot } from '../AnaCoutoMascot'
import { colorTextEn, colorTextPtBr } from './common'
import { ColorTextBackground, FooterContactsProps } from './footer'

export function FooterContacts({
  title,
  subtitle,
  address,
  social,
  copyright
}: FooterContactsProps) {
  const rawPath = usePathname()
  const pathSegments = rawPath.split('/')

  const shouldModifyPath = pathSegments.length > 2
  const path = shouldModifyPath ? `/${pathSegments[1]}/` : rawPath

  const pathData: ColorTextBackground = getPathData(
    rawPath,
    colorTextPtBr,
    colorTextEn
  )

  if (path === '/contato') {
    return <></>
  }

  return (
    <div
      className={cn(
        'z-10 flex w-full flex-col justify-between gap-10 px-6 py-10 sm:px-16 lg:flex-row',
        pathData?.styles?.color
      )}
    >
      <div className="flex flex-col">
        <div className="relative mb-5 h-auto w-10">
          <AnaCoutoMascot />
        </div>

        <p className="mb-10 font-kernCompressed text-4xl font-semibold">
          {title[0]}
          <br />
          {title[1]}
        </p>

        <input
          className="bg-[transparent] text-xl font-normal text-white outline-0"
          placeholder={`${subtitle}`}
        />
        <hr className={cn('h-0.5 w-full border-0', 'bg-white')} />
      </div>

      <div className="mr-24 flex flex-wrap justify-between gap-10 sm:mr-0 sm:h-2/4 sm:flex-row sm:gap-20">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">São Paulo</span>
          <span className="text-sm">{address[0]}</span>
          <span className="text-sm">{address[1]}</span>
          <span className="text-sm">{address[2]}</span>
          <span className="text-sm">{address[3]}</span>
        </div>

        <div className="flex flex-col gap-1">
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

        <div className="flex flex-col justify-between">
          <span className="text-sm font-semibold">© 2023 Ana Couto</span>

          <div className="flex flex-col gap-1">
            <span className="text-sm">{copyright[0]}</span>
            <span className="text-sm">{copyright[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
