import { cn } from '@/common/utils/cn'
import Image from 'next/image'
import { Message } from '../../components/Message'

export default function Home() {
  return (
    <main className="block w-full flex-col items-center justify-between font-kern font-bold sm:px-7">
      <Message
        title={
          'Há três décadas construimos marcas que geram valor para o mundo'
        }
        subTitle={'Quem somos'}
      />
      <div className="relative w-full flex-col gap-1 md:gap-3 ">
        <div className="relative w-full">
          <button
            className={cn(
              'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
              'bg-white text-black'
            )}
          >
            <text>Case</text>
          </button>
          <Image
            src={'/images/imagemgrid1.png'}
            alt="Imagem 1"
            objectFit="cover"
            width={1865}
            height={814}
            style={{ width: '100%' }}
          />
          <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
            <span className="text-4xl">Grupo Sabin</span>
            <span className="text-2lg">Propósito aqui</span>
          </div>
        </div>
        <div className="my-1 flex flex-col justify-between gap-3 md:my-3 md:flex-row ">
          <div className="relative h-96 w-full md:w-3/6 lg:w-3/6">
            <div className="relative mb-3 w-full">
              <button
                className={cn(
                  'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                  'bg-white text-black'
                )}
              >
                <text>Case</text>
              </button>
              <Image
                src={'/images/imagemgrid2.png'}
                alt="Imagem 2"
                objectFit="cover"
                width={918}
                height={919}
                style={{ width: '100%' }}
              />
              <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
                <span className="text-2xl md:text-4xl">Zuk</span>
                <span className="md:text-2lg text-base">
                  O valor que o país gera.
                </span>
              </div>
            </div>
            <div className="relative w-full">
              <button
                className={cn(
                  'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                  'bg-white text-black'
                )}
              >
                <text>Case</text>
              </button>
              <Image
                src={'/images/imagemgrid4.png'}
                alt="Imagem 4"
                objectFit="cover"
                width={918}
                height={421}
                style={{ width: '100%' }}
              />
              <div
                className={cn(
                  'absolute bottom-5 left-5 flex flex-col items-start gap-1',
                  'text-white'
                )}
              >
                <span className="text-2xl md:text-4xl">Cosan</span>
                <span className="md:text-2lg text-base">
                  O valor que o país gera.
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-96 w-full md:w-3/6 lg:w-3/6">
            <div className="relative mb-3 w-full">
              <button
                className={cn(
                  'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                  'bg-white text-black'
                )}
              >
                <text>Case</text>
              </button>
              <Image
                src={'/images/imagemgrid3.png'}
                alt="Imagem 3"
                objectFit="cover"
                width={918}
                height={421}
                style={{ width: '100%' }}
              />
              <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
                <span className="text-2xl md:text-4xl">Natura</span>
                <span className="md:text-2lg text-base">Tododia Todanoite</span>
              </div>
            </div>
            <div className="relative w-full">
              <button
                className={cn(
                  'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                  'bg-white text-black'
                )}
              >
                <text>Case</text>
              </button>
              <Image
                src={'/images/imagemgrid5.png'}
                alt="Imagem 5"
                objectFit="cover"
                width={918}
                height={421}
                style={{ width: '100%' }}
              />
              <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
                <span className="text-2xl md:text-4xl">HappyEggs</span>
                <span className="md:text-2lg text-base">Texto aqui</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-wrap justify-between gap-3 md:flex-row ">
          <div className="relative w-1/2 md:w-1/4">
            <button
              className={cn(
                'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                'bg-white text-black'
              )}
            >
              <text>Case</text>
            </button>
            <Image
              src={'/images/imagemgrid6.png'}
              alt="Imagem 6"
              objectFit="cover"
              width={437}
              height={421}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="text-2xl md:text-4xl">Branding Brasil</span>
              <span className="md:text-2lg text-base">
                O valor que o país gera.
              </span>
            </div>
          </div>
          <div className="relative w-1/2 md:w-1/4">
            <button
              className={cn(
                'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                'bg-white text-black'
              )}
            >
              <text>Case</text>
            </button>
            <Image
              src={'/images/imagemgrid7.png'}
              alt="Imagem 7"
              objectFit="cover"
              width={437}
              height={421}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="text-2xl md:text-4xl">Trends 2023</span>
              <span className="md:text-2lg text-base">Baixe agora.</span>
            </div>
          </div>
          <div className="relative w-1/2 md:w-1/4">
            <button className="absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded bg-white p-2 text-black">
              <text>Case</text>
            </button>
            <Image
              src={'/images/imagemgrid6.png'}
              alt="Imagem 8"
              objectFit="cover"
              width={437}
              height={421}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="text-2xl md:text-4xl">Branding Brasil</span>
              <span className="md:text-2lg text-base">
                O valor que o país gera.
              </span>
            </div>
          </div>
          <div className="relative w-1/2 md:w-1/4">
            <button
              className={cn(
                'absolute left-5 top-5 flex h-8 w-20 items-center justify-center rounded p-2',
                'bg-white text-black'
              )}
            >
              <text>Case</text>
            </button>
            <Image
              src={'/images/imagemgrid7.png'}
              alt="Imagem 9"
              objectFit="cover"
              width={437}
              height={421}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="text-2xl md:text-4xl">Trends 2023</span>
              <span className="md:text-2lg text-base">Baixe agora.</span>
            </div>
          </div>
        </div>
      </div>
      <Message
        title={
          'Há três décadas construimos marcas que geram valor para o mundo'
        }
        subTitle={'O que fazemos'}
      />
    </main>
  )
}
