import { kern } from '@/common/utils/fonts'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import './globals.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const locales = ['pt-br', 'en']

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const isValidLocale = locales.some(cur => cur === locale)
  if (!isValidLocale) notFound()

  return (
    <html lang={locale} className={kern.className}>
      <body>{children}</body>
    </html>
  )
}
