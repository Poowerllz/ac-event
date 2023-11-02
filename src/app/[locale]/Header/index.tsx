// 'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import MenuButton from '../TailwindButton'

export default function Header() {
  const t = useTranslations('Home')

  return (
    <main
      className="block h-screen w-full flex-col justify-between p-20 font-kern font-bold"
      style={{ background: '#FF4917' }}
    >
      {/* <h1>{t('title')}</h1> */}
      <div className="flex items-center justify-between">
        <Image
          src={'/images/logo.png'}
          alt={'Imagem da logo'}
          width={100}
          height={100}
        />
        <MenuButton />
      </div>
      <div className="grid h-full grid-cols-3">
        <div className="col-rows-1 flex w-28 items-end">
          <p className="text-white text-6xl">É FAZ FALA</p>
        </div>

        <div className="col-rows-2 flex items-end justify-center">
          <Image
            src={'/images/sua-imagem.png'}
            alt={'Imagem'}
            width={200}
            height={200}
          />
        </div>

        <div className="col-rows-1 flex items-end justify-end">
          <FaBars size={24} />
        </div>
      </div>
    </main>
  )
}
