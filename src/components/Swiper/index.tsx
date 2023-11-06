'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

export default function Carousel() {
  const images: string[] = [
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas',
    'havaianas'
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  }
  return (
    <div className="flex h-40 w-full flex-row overflow-hidden">
      <Slider
        {...settings}
        className="flew-row flex h-screen w-full flex-row overflow-hidden  text-center"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="flex h-auto w-1/5 flex-row items-center  justify-center overflow-hidden"
          >
            <Image
              src={`/images/${img}.png`}
              alt={`Imagem ${idx + 1}`}
              objectFit="cover"
              width={165}
              height={114}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
