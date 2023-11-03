import { kern, kernCompressed } from '@/common/utils/fonts'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import './globals.css'

import Header from '@/components/Header'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const locales = ['pt-br', 'en']

export const metadata: Metadata = {
  title: 'Ana Couto',
  description: 'Marca com propósito, comunicação com resultado.'
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
    <html
      lang={locale}
      className={`${kern.variable} ${kernCompressed.variable}`}
    >
      <body>
        <Header />
        <main className="h-full w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
