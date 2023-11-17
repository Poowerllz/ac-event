import Carousel from '@/components/Swiper'
import { Message } from '../../components/Message'
import { ImageHomeGrid } from '@/components/ImageHomeGrid'

export default function Home() {
  return (
    <main className="block w-full flex-col items-center justify-between overflow-hidden font-kern  font-bold">
      <Message
        title={
          'Somos feitos de propósito para transformar organizações e pessoas, alinhando marca, negócio e comunicação. Somos a anacouto.'
        }
        subTitle={'Quem somos'}
        arrow={true}
      />

      <ImageHomeGrid />
      <Message
        title={
          'Há 30 anos criamos o extraordinário para marcas que impactam o mundo com mais valor e amor.'
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
