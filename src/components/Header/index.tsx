import Image from 'next/image'
import DynamicHeader from './DynamicHeader'
import Menu from './Menu'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-primary">
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

      {/*  do logic to hide background */}
      <div className="absolute z-30 h-[46vw] w-[46vw] rounded-full" />
      <div className="relative h-full w-full px-6 sm:px-16">
        <DynamicHeader />
      </div>
    </div>
  )
}
