'use client'
import { Grid, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import '../../../../public/images/havaianas.png'
export const SwiperClient = () => {
  //   const images: any[] = [{ image: '../../../../public/images/havaianas.png' }]
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
          marginTop: '42px',
          marginBottom: '65px',
          height: 'auto',
          display: 'flex',
          justifyContent: 'space-between'
        }}
        modules={[Navigation, Pagination, Autoplay, Grid]}
        autoplay={{ delay: 2000 }}
        grid={{ rows: 2, fill: 'row' }}
        centeredSlides={true}
        spaceBetween={0}
        navigation={{
          prevEl: ''
        }}
        slidesPerView={3}
        // onSlideChange={swiper => setCurrentIn(swiper.realIndex)}
        loop={true}
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
              <div style={{ rowGap: 'none', top: '0', height: '100%' }}></div>
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
