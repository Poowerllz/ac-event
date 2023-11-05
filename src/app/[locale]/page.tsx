import { Message } from '../../components/Message'
import { ImageHomeGrid } from '@/components/ImageHomeGrid'

export default function Home() {
  return (
    <main className="block w-full flex-col items-center justify-between font-kern font-bold">
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
