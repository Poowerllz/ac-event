import Image from 'next/image'
import HeaderImage from './HeaderImage'
import Menu from './Menu'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary">
      <video
        loop
        muted
        autoPlay
        width="100%"
        height="100%"
        className="absolute h-full w-full object-cover"
      >
        <source src="./images/home/background.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>

      <div className="relative h-full w-full px-6 sm:px-16">
        <HeaderImage />

        <Link href={'/'} scroll={false}>
          <Image
            src={'/images/logo.png'}
            alt={'Imagem da logo'}
            className="absolute top-16 z-10 cursor-pointer"
            height={100}
            width={100}
          />
        </Link>

        <Image
          src={'arrowdown.svg'}
          alt={'Imagem de uma seta'}
          className="absolute bottom-20 right-6 z-10 w-4 sm:right-16 sm:w-6"
          width={24}
          height={24}
        />

        <p
          className={
            'absolute top-28 z-10 text-5xl font-bold text-white sm:bottom-20 sm:top-auto sm:text-7xl'
          }
        >
          É<br />
          FAZ
          <br />
          FALA
        </p>

        <Menu />
      </div>
    </div>
  )
}
