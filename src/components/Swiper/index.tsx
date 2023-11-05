'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
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

  return (
    <div className="flex w-full justify-center">
      <Swiper
        style={{
          width: '100%',
          alignItems: 'center',
          position: 'relative',
          height: 'auto',
          display: 'flex',
          justifyContent: 'space-between'
        }}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        freeMode={true}
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
              <div style={{ width: '212px' }}>
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
