'use client'
import { cn } from '@/common/utils/cn'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import { ArrowMobile } from '../arrowMobile'

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {isMobile ? (
        <>
          <div className="flex h-auto w-full flex-col bg-primary px-7 pt-28 ">
            <div className="mb-80 flex items-center justify-between md:mb-5">
              <Image
                src={'/images/logo.png'}
                alt={'Imagem da logo'}
                width={100}
                height={100}
              />
            </div>

            <div className="flex h-full w-full justify-between align-bottom">
              <div className="absolute top-52 z-50 flex w-28 items-end md:relative md:top-0">
                <p className={cn('text-5xl font-bold', 'text-white')}>
                  É FAZ FALA
                </p>
              </div>

              {/* <div className="flex w-full justify-center"> */}
              <div className="circlemobile relative w-full overflow-hidden">
                <video
                  controls
                  width="100%"
                  height="100%"
                  className="absolute h-full w-full "
                >
                  <source src="seu-video.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
              {/* </div> */}

              <div className="absolute bottom-5 right-7 items-end justify-end sm:flex md:relative md:right-0">
                <ArrowMobile name={'arrowdown'} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {' '}
          <div className="flex w-full flex-col bg-primary  px-20 py-28   lg:px-20">
            <div className="mb-80 flex items-center justify-between md:mb-5">
              <Image
                src={'/images/logo.png'}
                alt={'Imagem da logo'}
                width={100}
                height={100}
              />
            </div>

            <div className=" flex h-full justify-between align-bottom">
              <div className=" absolute top-60 z-50 flex w-28 items-end md:relative md:top-0">
                <p className={cn('text-6xl font-bold', 'text-white')}>
                  É FAZ FALA
                </p>
              </div>

              <div className="flex w-full items-center justify-center">
                <div className="circle md:circlemobile relative overflow-hidden">
                  <video
                    controls
                    width="100%"
                    height="auto"
                    className="absolute h-full w-full"
                  >
                    <source src="seu-video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                </div>
              </div>

              <div className="absolute  right-14 items-end justify-end sm:flex md:relative md:right-0">
                <Image
                  src={'/arrowdown.svg'}
                  alt={'Imagem'}
                  width={22}
                  height={50}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
