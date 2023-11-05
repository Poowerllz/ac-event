'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  Autoplay
} from 'swiper/modules'
import 'swiper/swiper-bundle.css'

export const SwiperClient = () => {
  const images: string[] = [
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas'
  ]

  const swiperParams = {
    loop: true, // Permite rolagem contínua
    spaceBetween: 20, // Espaço entre os slides (ajuste conforme necessário)
    slidesPerView: 1, // Número de slides visíveis ao mesmo tempo (ajuste conforme necessário)
    grabCursor: true, // Mostra um cursor de mão ao passar o mouse nos slides
    speed: 500 // Velocidade da transição dos slides (ajuste conforme necessário)
  }

  return (
    <div className="flex w-full justify-center">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={'auto'}
        loop={true}
        freeMode={true}
        grabCursor={true}
        speed={500}
      >
        {images.map((item: any, idx: any) => (
          <SwiperSlide
            key={idx}
            style={{
              width: '100%',
              height: 'auto',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div
              key={idx}
              style={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '5px',
                padding: '21px 19px 33px 18px'
              }}
            >
              <div className="slide-content" style={{ width: '212px' }}>
                <Image
                  src={`/images/${item}.png`}
                  alt="Imagem 1"
                  objectFit="cover"
                  width={1865}
                  height={814}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
