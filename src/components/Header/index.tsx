import { cn } from '@/common/utils/cn'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex w-full flex-col bg-primary px-14 py-32 md:px-20 md:pb-20 md:pt-14 lg:px-20">
      <div className=" mb-80 flex items-center justify-between md:mb-5">
        <Image
          src={'/images/logo.png'}
          alt={'Imagem da logo'}
          width={100}
          height={100}
        />
      </div>

      <div className=" flex h-full justify-between align-bottom">
        <div className=" absolute top-80 z-50 flex w-28 items-end md:relative md:top-0">
          <p className={cn('text-6xl font-bold', 'text-white')}>É FAZ FALA</p>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="circle  relative h-96 w-96 overflow-hidden md:w-5/6">
            <video
              controls
              width="100%"
              height="auto"
              className="absolute h-full w-full object-cover"
            >
              <source src="seu-video.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>

        <div className="absolute  right-14 items-end justify-end sm:flex md:relative md:right-0">
          <Image src={'/arrowdown.svg'} alt={'Imagem'} width={22} height={50} />
        </div>
      </div>
    </div>
  )
}
