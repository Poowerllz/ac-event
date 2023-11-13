'use client'
import { cn } from '@/common/utils/cn'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'

export const ImageGalleryHome = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {isMobile ? (
        <>
          <div className="relative w-1/2 md:w-1/2 lg:w-1/4">
            <button
              className={cn(
                'absolute left-3 top-3 flex h-6 w-14 items-center justify-center rounded p-2',
                'bg-white text-black'
              )}
            >
              <text className="text-xs">Case</text>
            </button>
            <Image
              src={'/images/imagemgrid6.png'}
              alt="Imagem 6"
              objectFit="cover"
              width={437}
              height={421}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="text-base leading-3">Branding Brasil</span>
              <span className="text-xs leading-3">
                O valor que o país gera.
              </span>
            </div>
          </div>
          <div className="relative w-1/2 md:w-1/2 lg:w-1/4">
            <button
              className={cn(
                'absolute left-3 top-3 flex h-6 w-14 items-center justify-center rounded p-2',
                'bg-white text-black'
              )}
            >
              <text className="text-xs">Case</text>
            </button>
            <Image
              src={'/images/imagemgrid7.png'}
              alt="Imagem 7"
              objectFit="cover"
              width={437}
              height={421}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="text-base leading-3">Trends 2023</span>
              <span className="text-xs leading-3">Baixe agora.</span>
            </div>
          </div>{' '}
        </>
      ) : (
        <>
          <div className="relative w-1/2 md:w-1/2 lg:w-1/4">
            <button
              className={cn(
                'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                'bg-white text-black'
              )}
            >
              <text>Case</text>
            </button>
            <Image
              src={'/images/imagemgrid6.png'}
              alt="Imagem 6"
              objectFit="cover"
              width={437}
              height={421}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-3 text-white">
              <span className="text-2xl md:text-4xl">Branding Brasil</span>
              <span className="text-xs leading-3">
                O valor que o país gera.
              </span>
            </div>
          </div>
          <div className="relative w-1/2 md:w-1/2 lg:w-1/4">
            <button
              className={cn(
                'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                'bg-white text-black'
              )}
            >
              <text>Case</text>
            </button>
            <Image
              src={'/images/imagemgrid7.png'}
              alt="Imagem 7"
              objectFit="cover"
              width={437}
              height={421}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="text-2xl md:text-4xl">Trends 2023</span>
              <span className="md:text-2lg text-base">Baixe agora.</span>
            </div>
          </div>
          <div className="relative w-1/2 md:w-1/2 lg:w-1/4">
            <button className="absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
              <text>Case</text>
            </button>
            <Image
              src={'/images/imagemgrid6.png'}
              alt="Imagem 8"
              objectFit="cover"
              width={437}
              height={421}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="text-2xl md:text-4xl">Branding Brasil</span>
              <span className="md:text-2lg text-base">
                O valor que o país gera.
              </span>
            </div>
          </div>
          <div className="relative w-1/2 md:w-1/2 lg:w-1/4">
            <button
              className={cn(
                'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                'bg-white text-black'
              )}
            >
              <text>Case</text>
            </button>
            <Image
              src={'/images/imagemgrid7.png'}
              alt="Imagem 9"
              objectFit="cover"
              width={437}
              height={421}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="text-2xl md:text-4xl">Trends 2023</span>
              <span className="md:text-2lg text-base">Baixe agora.</span>
            </div>
          </div>{' '}
        </>
      )}
    </>
  )
}
