'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { ImagesProps } from './type'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Carousel({ images }: ImagesProps) {
  const isMobile = useMediaQuery('(max-width: 600px)')

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
    <>
      {isMobile ? (
        <div className="my-auto flex h-14 w-full flex-row items-center overflow-hidden">
          <Slider
            {...settings}
            className="flew-row flex h-full w-full items-center overflow-hidden text-center"
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="my-auto flex h-auto w-1/5 flex-row justify-center overflow-hidden text-center"
              >
                <Image
                  src={`/images/${img}.svg`}
                  alt={`Imagem ${idx + 1}`}
                  objectFit="cover"
                  width={50}
                  height={30}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
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
                  src={`/images/${img}.svg`}
                  alt={`Imagem ${idx + 1}`}
                  objectFit="cover"
                  width={125}
                  height={90}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  )
}
