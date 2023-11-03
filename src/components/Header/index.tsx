import { cn } from '@/common/utils/cn'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="relative mb-40 flex w-full flex-col gap-10 bg-primary px-5 py-10 md:px-10 lg:px-20">
      <div className="flex items-center justify-between">
        <Image
          src={'/images/logo.png'}
          alt={'Imagem da logo'}
          width={100}
          height={100}
        />
      </div>

      <div className="flex items-end justify-between">
        <div className="absolute bottom-20 left-20 z-10 flex w-28 items-end">
          <p className={cn('text-6xl font-bold', 'text-white')}>É FAZ FALA</p>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="circle relative w-full overflow-hidden">
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

        <div className="hidden items-end justify-end sm:flex">
          <Image src={'/arrowdown.svg'} alt={'Imagem'} width={22} height={50} />
        </div>
      </div>
    </div>
  )
}
