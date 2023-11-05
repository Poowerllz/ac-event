import { cn } from '@/common/utils/cn'
import Image from 'next/image'
import { Message } from '../../components/Message'
import { ImageGalleryHome } from '@/components/ImageGalleryHome'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ArrowMobile } from '@/components/arrowMobile'
import { ImageHomeGrid } from '@/components/ImageHomeGrid'
import { SwiperClient } from '@/components/Swiper'

export default function Home() {
  return (
    <main className="block w-full flex-col items-center justify-between px-4 font-kern font-bold sm:px-7">
      <Message
        title={
          'Há três décadas construimos marcas que geram valor para o mundo'
        }
        subTitle={'Quem somos'}
        arrow={true}
      />

      <ImageHomeGrid />
      <Message
        title={
          'Há três décadas construimos marcas que geram valor para o mundo'
        }
        subTitle={'O que fazemos'}
        arrow={false}
      />
    </main>
  )
}
