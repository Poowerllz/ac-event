import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import MenuButton from '../TailwindButton'

export default function Header() {
  const t = useTranslations('Home')

  return (
    <div
      className="flex h-screen w-full flex-col justify-between p-20 font-kern font-bold"
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

      <div className="flex items-end justify-between">
        <div className=" flex w-28 items-end">
          <p className="text-6xl text-white">É FAZ FALA</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="circle">
            <video controls width="100%" height="100%">
              <source src="seu-video.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>

        <div className="flex items-end justify-end">
          <Image src={'/arrowdown.svg'} alt={'Imagem'} width={22} height={50} />
        </div>
      </div>
    </div>
  )
}
