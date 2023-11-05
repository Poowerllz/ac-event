'use client'
import { cn } from '@/common/utils/cn'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import { ImageGalleryHome } from '../ImageGalleryHome'
import React from 'react'

export const ImageHomeGrid = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {isMobile ? (
        <>
          <div className="relative h-auto w-full flex-col gap-1 px-4 ">
            <div className="relative w-full">
              <button
                className={cn(
                  'absolute left-3 top-3 flex h-6 w-14 items-center justify-center rounded p-2',
                  'bg-white text-black'
                )}
              >
                <text className="text-xs">Case</text>
              </button>
              <Image
                src={'/images/banneronemob.png'}
                alt="Imagem 1"
                objectFit="cover"
                width={1865}
                height={814}
                style={{ width: '100%' }}
              />
              <div className="absolute bottom-3 left-3 flex flex-col items-start gap-1 text-white">
                <span className="text-base leading-3">Grupo Sabin</span>
                <span className="text-xs leading-3">Propósito aqui</span>
              </div>
            </div>
            <div className="my-1 flex flex-col justify-between gap-1">
              <div className="relative w-full ">
                <div className="relative mb-1 w-full">
                  <button
                    className={cn(
                      'absolute left-3 top-3 flex h-6 w-14 items-center justify-center rounded p-2',
                      'bg-white text-black'
                    )}
                  >
                    <text className="text-xs">Case</text>
                  </button>
                  <Image
                    src={'/images/bannertwomob.png'}
                    alt="Imagem 2"
                    objectFit="cover"
                    width={918}
                    height={919}
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
                    <span className="text-base leading-3">Zuk</span>
                    <span className="text-xs leading-3">
                      O valor que o país gera.
                    </span>
                  </div>
                </div>
                <div className="relative w-full">
                  <button
                    className={cn(
                      'absolute left-3 top-3 flex h-6 w-14 items-center justify-center rounded p-2',
                      'bg-white text-black'
                    )}
                  >
                    <text className="text-xs">Case</text>
                  </button>
                  <Image
                    src={'/images/bannertreemob.png'}
                    alt="Imagem 4"
                    objectFit="cover"
                    width={918}
                    height={421}
                    style={{ width: '100%' }}
                  />
                  <div
                    className={cn(
                      'absolute bottom-5 left-5 flex flex-col items-start gap-1',
                      'text-white'
                    )}
                  >
                    <span className="text-base leading-3">Cosan</span>
                    <span className="text-xs leading-3">
                      O valor que o país gera.
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative w-full">
                <div className="relative mb-1 w-full">
                  <button
                    className={cn(
                      'absolute left-3 top-3 flex h-6 w-14 items-center justify-center rounded p-2',
                      'bg-white text-black'
                    )}
                  >
                    <text className="text-xs">Case</text>
                  </button>
                  <Image
                    src={'/images/bannerfourmob.png'}
                    alt="Imagem 3"
                    objectFit="cover"
                    width={918}
                    height={421}
                    style={{ width: '100%' }}
                  />
                  <div className="absolute bottom-3 left-3 flex flex-col items-start gap-1 text-white">
                    <span className="text-base leading-3">Natura</span>
                    <span className="text-xs leading-3">Tododia Todanoite</span>
                  </div>
                </div>
                <div className="relative w-full">
                  <button
                    className={cn(
                      'absolute left-3 top-3 flex h-6 w-14 items-center justify-center rounded p-2',
                      'bg-white text-black'
                    )}
                  >
                    <text className="text-xs">Case</text>
                  </button>
                  <Image
                    src={'/images/bannerfivemob.png'}
                    alt="Imagem 5"
                    objectFit="cover"
                    width={918}
                    height={421}
                    style={{ width: '100%' }}
                  />
                  <div className="absolute bottom-3 left-3 flex flex-col items-start gap-1 text-white">
                    <span className="text-base leading-3">HappyEggs</span>
                    <span className="text-xs leading-3">Texto aqui</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-1 ">
              <ImageGalleryHome />
            </div>
          </div>
        </>
      ) : (
        <>
          {' '}
          <div className="relative h-auto w-full flex-col gap-3 px-7">
            <div className="relative w-full">
              <button
                className={cn(
                  'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                  'bg-white text-black'
                )}
              >
                <text>Case</text>
              </button>
              <Image
                src={'/images/imagemgrid1.png'}
                alt="Imagem 1"
                objectFit="cover"
                width={1865}
                height={814}
                style={{ width: '100%' }}
              />
              <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
                <span className="text-4xl">Grupo Sabin</span>
                <span className="text-2lg">Propósito aqui</span>
              </div>
            </div>
            <div className="my-1 flex flex-col justify-between gap-3 md:my-3 md:flex-row ">
              <div className="relative w-3/6 lg:w-3/6">
                <div className="relative mb-3 w-full">
                  <button
                    className={cn(
                      'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                      'bg-white text-black'
                    )}
                  >
                    <text>Case</text>
                  </button>
                  <Image
                    src={'/images/imagemgrid2.png'}
                    alt="Imagem 2"
                    objectFit="cover"
                    width={918}
                    height={919}
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
                    <span className="md:text-4xl">Zuk</span>
                    <span className="md:text-2lg ">
                      O valor que o país gera.
                    </span>
                  </div>
                </div>
                <div className="relative w-full">
                  <button
                    className={cn(
                      'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                      'bg-white text-black'
                    )}
                  >
                    <text>Case</text>
                  </button>
                  <Image
                    src={'/images/imagemgrid4.png'}
                    alt="Imagem 4"
                    objectFit="cover"
                    width={918}
                    height={421}
                    style={{ width: '100%' }}
                  />
                  <div
                    className={cn(
                      'absolute bottom-5 left-5 flex flex-col items-start gap-1',
                      'text-white'
                    )}
                  >
                    <span className="md:text-4xl">Cosan</span>
                    <span className="md:text-2lg">
                      O valor que o país gera.
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative w-3/6 lg:w-3/6">
                <div className="relative mb-3 w-full">
                  <button
                    className={cn(
                      'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                      'bg-white text-black'
                    )}
                  >
                    <text>Case</text>
                  </button>
                  <Image
                    src={'/images/imagemgrid3.png'}
                    alt="Imagem 3"
                    objectFit="cover"
                    width={918}
                    height={421}
                    style={{ width: '100%' }}
                  />
                  <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
                    <span className="md:text-4xl">Natura</span>
                    <span className="md:text-2lg">Tododia Todanoite</span>
                  </div>
                </div>
                <div className="relative w-full">
                  <button
                    className={cn(
                      'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                      'bg-white text-black'
                    )}
                  >
                    <text>Case</text>
                  </button>
                  <Image
                    src={'/images/imagemgrid5.png'}
                    alt="Imagem 5"
                    objectFit="cover"
                    width={918}
                    height={421}
                    style={{ width: '100%' }}
                  />
                  <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
                    <span className="md:text-4xl">HappyEggs</span>
                    <span className="md:text-2lg">Texto aqui</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-1 ">
              <ImageGalleryHome />
            </div>
          </div>
        </>
      )}
    </>
  )
}
