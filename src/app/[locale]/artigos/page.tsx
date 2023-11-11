import Image from 'next/image'
import More from '@/images/svg/more.svg'
import { ArrowMobile } from '@/components/arrowMobile'
import { cn } from '@/common/utils/cn'
import image1 from '@/images/artigo1.png'
import image2 from '@/images/artigo2.png'
import image3 from '@/images/artigo3.png'
import image4 from '@/images/artigo4.png'
import image5 from '@/images/artigo5.png'

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

      <section className="mb-20 flex w-full">
        <div className="relative h-auto w-full flex-col gap-3 px-7">
          <div className="relative w-full">
            <button
              className={cn(
                'absolute left-3 top-3 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-5 md:top-5 md:h-8 md:w-24',
                'bg-white text-black'
              )}
            >
              <text className="font-kernCompressed text-xs font-bold md:text-base">
                Downloads
              </text>
            </button>
            <button
              className={cn(
                'absolute left-24 top-3 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-32  md:top-5 md:h-8 md:w-24',
                'bg-white text-black'
              )}
            >
              <text className="font-kernCompressed text-xs font-bold md:text-base">
                TIP Insights
              </text>
            </button>
            <Image
              src={image1}
              alt="Imagem 1"
              objectFit="cover"
              width={1865}
              height={814}
              style={{ width: '100%' }}
            />
            <div className="absolute bottom-3 left-3 flex w-1/3 flex-col items-start gap-1 text-white md:bottom-5 md:left-5 md:w-1/6">
              <span className="text-sm leading-4 md:text-3xl">
                Branding na cadeira do CEO
              </span>
            </div>
          </div>
          <div className="my-1 flex flex-col justify-between gap-3 md:my-3 md:flex-row ">
            <div className="relative w-full lg:w-3/6">
              <div className="relative mb-3 w-full">
                <button
                  className={cn(
                    'absolute left-3 top-3 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-5 md:top-5 md:h-8 md:w-24',
                    'bg-white text-black'
                  )}
                >
                  <text className="font-kernCompressed text-xs font-bold md:text-base">
                    Downloads
                  </text>
                </button>
                <button
                  className={cn(
                    'absolute left-24 top-3 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-32  md:top-5 md:h-8 md:w-24',
                    'bg-white text-black'
                  )}
                >
                  <text className="font-kernCompressed text-xs font-bold md:text-base">
                    TIP Insights
                  </text>
                </button>
                <Image
                  src={image2}
                  alt="Imagem 2"
                  objectFit="cover"
                  width={918}
                  height={919}
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute bottom-3 left-3 flex w-2/3 flex-col items-start gap-1 text-white md:bottom-5 md:left-5 md:w-3/5">
                  <span className="text-sm leading-4 md:text-3xl">
                    Proposito decodificado: um olhar renovador sobre um tema
                    cansado
                  </span>
                </div>
              </div>

              <div className="relative  w-full">
                <button
                  className={cn(
                    'absolute left-3 top-3 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-5 md:top-5 md:h-8 md:w-24',
                    'bg-white text-black'
                  )}
                >
                  <text className="font-kernCompressed text-xs font-bold md:text-base">
                    Downloads
                  </text>
                </button>
                <button
                  className={cn(
                    'absolute left-24 top-3 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-32  md:top-5 md:h-8 md:w-24',
                    'bg-white text-black'
                  )}
                >
                  <text className="font-kernCompressed text-xs font-bold md:text-base">
                    TIP Insights
                  </text>
                </button>
                <Image
                  src={image3}
                  alt="Imagem 3"
                  objectFit="cover"
                  width={918}
                  height={421}
                  style={{ width: '100%' }}
                />
                <div className="absolute bottom-3 left-3 flex w-2/5 flex-col items-start gap-1 text-white md:bottom-5 md:left-5">
                  <span className="text-sm leading-4 md:text-3xl">
                    Qual o valor da brasilidade criativa?
                  </span>
                </div>
              </div>
            </div>

            <div className="relative w-full md:w-3/6">
              <div className="relative mb-3 w-full">
                <button
                  className={cn(
                    'absolute left-3 top-3 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-5 md:top-5 md:h-8 md:w-24',
                    'bg-white text-black'
                  )}
                >
                  <text className="font-kernCompressed text-xs font-bold md:text-base">
                    Downloads
                  </text>
                </button>
                <button
                  className={cn(
                    'absolute left-24 top-3 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-32  md:top-5 md:h-8 md:w-24',
                    'bg-white text-black'
                  )}
                >
                  <text className="font-kernCompressed text-xs font-bold md:text-base">
                    TIP Insights
                  </text>
                </button>
                <Image
                  src={image4}
                  alt="Imagem 4"
                  objectFit="cover"
                  width={918}
                  height={421}
                  style={{ width: '100%' }}
                />

                <div className="absolute bottom-3 left-3 flex w-1/3 flex-col items-start gap-1 text-white md:bottom-5 md:left-5">
                  <span className="text-sm leading-4 md:text-3xl">
                    Qual o valor da nova economia?
                  </span>
                </div>
              </div>
              <div className="relative w-full">
                <button
                  className={cn(
                    'absolute left-3 top-3 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-5 md:top-5 md:h-8 md:w-24',
                    'bg-white text-black'
                  )}
                >
                  <text className="font-kernCompressed text-xs font-bold md:text-base">
                    Downloads
                  </text>
                </button>
                <button
                  className={cn(
                    'absolute left-24 top-3 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-32  md:top-5 md:h-8 md:w-24',
                    'bg-white text-black'
                  )}
                >
                  <text className="font-kernCompressed text-xs font-bold md:text-base">
                    TIP Insights
                  </text>
                </button>
                <Image
                  src={image5}
                  alt="Imagem 5"
                  objectFit="cover"
                  width={918}
                  height={421}
                  style={{ width: '100%' }}
                />
                <div className="absolute bottom-3 left-3 flex w-2/3 flex-col items-start gap-1 text-white md:bottom-5 md:left-5 md:w-2/6">
                  <span className="text-sm leading-4 md:text-3xl">
                    Como as marcas se comportam no meio digital?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
