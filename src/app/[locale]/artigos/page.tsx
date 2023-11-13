import { cn } from '@/common/utils/cn'
import ArtigosGrid from '@/components/ArtigosGrid'
import { ArrowMobile } from '@/components/arrowMobile'
import image1 from '@/images/artigo1.png'
import image2 from '@/images/artigo2.png'
import image3 from '@/images/artigo3.png'
import image4 from '@/images/artigo4.png'
import image5 from '@/images/artigo5.png'
import More from '@/images/svg/more.svg'
import Image from 'next/image'

export default function Artigos() {
  return (
    <>
      <section className="flex w-full flex-col gap-2 px-6 py-20 sm:mb-40 sm:px-16 md:gap-10">
        <div>
          <h1 className="font-kernCompressed text-5xl font-bold sm:w-3/5 sm:text-6xl lg:text-8xl">
            Lorem ipsum em <br />
            design gráfico e <br />
            editoração é um <br />
            texto padrão.
          </h1>
          <div className="relative flex h-full w-full flex-col  justify-between">
            <div className="absolute -top-56 h-full  w-full -rotate-180 transform cursor-pointer md:-top-80">
              <ArrowMobile name={'arrowtop'} />
            </div>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 self-start">
          <Image src={More} alt="More Icon" width={24} height={24} />
          <span className="font-bold leading-3">Filtrar por cases</span>
        </button>
      </section>

      <ArtigosGrid />
    </>
  )
}
