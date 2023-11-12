import Carousel from '@/components/Swiper'
import { Message } from '../../components/Message'
import { ImageHomeGrid } from '@/components/ImageHomeGrid'
import DynamicHeader from '@/components/Header/DynamicHeader'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="block w-full flex-col items-center justify-between overflow-hidden font-kern  font-bold">
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
      <Carousel
        images={[
          'havaianas',
          'ifood',
          'raizen',
          'vl',
          'bs2',
          'havaianas',
          'ifood',
          'raizen',
          'vl',
          'bs2'
        ]}
      />
      <Carousel
        images={[
          'nextel',
          'parperfeito',
          'grupo',
          'uol',
          'tele',
          'nextel',
          'parperfeito',
          'grupo',
          'uol',
          'tele'
        ]}
      />
      <div className="bp-10 h-10" />
    </main>
  )
}
