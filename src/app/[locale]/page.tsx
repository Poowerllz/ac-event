// 'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import MenuButton from './TailwindButton'
import { Message } from './Message'
import Header from './Header'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main className="block w-full flex-col justify-between font-kern font-bold">
      {/* <h1>{t('title')}</h1> */}
      <Header />
      <Message
        title={
          'Há três décadas construimos marcas que geram valor para o mundo'
        }
        subTitle={'Quem somos'}
      />
      <div className="grid w-full grid-cols-2 grid-rows-5 gap-2">
        <div className="col-span-2 row-span-1">
          <Image
            src={'/images/bannerOne.png'}
            alt="Imagem 1"
            layout="responsive"
            width={100}
            height={200}
          />
        </div>

        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 1"
          width={200}
          height={200}
        />
        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 2"
          width={200}
          height={200}
        />
        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 3"
          width={200}
          height={200}
        />
        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 2"
          width={200}
          height={200}
        />
        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 4"
          width={200}
          height={200}
        />
        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 5"
          width={200}
          height={200}
        />
        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 4"
          width={200}
          height={200}
        />
        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 6"
          width={200}
          height={200}
        />
        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 7"
          width={200}
          height={200}
        />
        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 8"
          width={200}
          height={200}
        />
        <Image
          src={'/images/bannerOne.png'}
          alt="Imagem 9"
          width={200}
          height={200}
        />
      </div>
    </main>
  )
}
