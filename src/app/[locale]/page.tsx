// 'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Message } from './Message'
import Header from './Header'
import React from 'react'
import { Grid, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperClient } from './Swiper'
import { Button } from '@material-tailwind/react'

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
      <div className="relative w-full flex-col gap-3">
        <div className="w-full">
          <Image
            src={'/images/imagemgrid1.png'}
            alt="Imagem 1"
            objectFit="cover"
            width={1865}
            height={814}
            style={{ width: '100%' }}
          />
          <button className="absolute left-3 top-3 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
            <text>Case</text>
          </button>
        </div>
        <div className="my-3 flex justify-between gap-3">
          <div className="relative w-3/6">
            <div className="relative mb-3">
              <button className="absolute left-3 top-3 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
                <text>Case</text>
              </button>
              <Image
                src={'/images/imagemgrid2.png'}
                alt="Imagem 2"
                objectFit="cover"
                width={918}
                height={919}
                style={{ width: '100%' }}
              />
            </div>
            <div className="relative">
              <button className="absolute left-3 top-3 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
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
            </div>
          </div>

          <div className="relative w-3/6">
            <div className="relative mb-3">
              <button className="absolute left-3 top-3 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
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
            </div>
            <div className="relative">
              <button className="absolute left-3 top-3 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
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
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-3 ">
          <div className="relative w-1/4">
            <button className="absolute left-3 top-3 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
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
          </div>
          <div className="relative w-1/4">
            <button className="absolute left-3 top-3 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
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
          </div>
          <div className="relative w-1/4">
            <button className="absolute left-3 top-3 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
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
          </div>
          <div className="relative w-1/4">
            <button className="absolute left-3 top-3 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
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
          </div>
        </div>
      </div>
      <Message
        title={
          'Há três décadas construimos marcas que geram valor para o mundo'
        }
        subTitle={'O que fazemos'}
      />

      <SwiperClient />
    </main>
  )
}
