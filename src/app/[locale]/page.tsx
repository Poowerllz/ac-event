import { useTranslations } from 'next-intl'
import Image from 'next/image'
import logo from '../../../public/images/svg/logo.svg'

export default function Home() {
  const t = useTranslations('Home')
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-[#FF4917] p-24 font-kern font-bold">
      <Image src={logo} width={338.4658} height={57.368} alt="Logo Ana Couto" />
      <h1 className="text-3xl font-normal text-gray-100">{t('title')}</h1>
    </main>
  )
}
