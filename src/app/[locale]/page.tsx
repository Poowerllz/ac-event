import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')
  return (
    <main className="font-kern flex min-h-screen flex-col items-center justify-between p-24 font-bold">
      <h1>{t('title')}</h1>
    </main>
  )
}
