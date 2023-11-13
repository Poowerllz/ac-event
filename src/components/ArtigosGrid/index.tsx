'use client'
import Image from 'next/image'
import { cn } from '@/common/utils/cn'
import image1 from '@/images/artigo1.png'
import image2 from '@/images/artigo2.png'
import image3 from '@/images/artigo3.png'
import image4 from '@/images/artigo4.png'
import image5 from '@/images/artigo5.png'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function ArtigosGrid() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {isMobile ? (
        <section className="mb-20 flex w-full">
          <div className="relative h-auto w-full flex-col gap-1 px-1">
            <div className="relative w-full">
              <button
                className={cn(
                  'absolute right-2 top-2 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-5 md:top-5 md:h-8 md:w-24',
                  'bg-white text-black'
                )}
              >
                <text className="font-kernCompressed text-xs font-bold md:text-base">
                  Downloads
                </text>
              </button>
              <button
                className={cn(
                  'absolute right-24 top-2 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-32  md:top-5 md:h-8 md:w-24',
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
                width={1865}
                height={150}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <div className="absolute bottom-2 left-2 flex w-1/3 flex-col items-start gap-1 text-white md:bottom-5 md:left-5 md:w-1/6">
                <span className="text-sm leading-4 md:text-3xl">
                  Branding na cadeira do CEO
                </span>
              </div>
            </div>
            <div className="my-1 flex flex-col justify-between gap-1 md:my-1 md:flex-row ">
              <div className="relative w-full lg:w-3/6">
                <div className="relative mb-1 w-full">
                  <button
                    className={cn(
                      'absolute right-2 top-2 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-5 md:top-5 md:h-8 md:w-24',
                      'bg-white text-black'
                    )}
                  >
                    <text className="font-kernCompressed text-xs font-bold md:text-base">
                      Downloads
                    </text>
                  </button>
                  <button
                    className={cn(
                      'absolute right-24 top-2 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-32  md:top-5 md:h-8 md:w-24',
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
                    width={918}
                    height={150}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="absolute bottom-2 left-2 flex w-2/3 flex-col items-start gap-1 text-white md:bottom-5 md:left-5 md:w-3/5">
                    <span className="text-sm leading-4 md:text-3xl">
                      Proposito decodificado: um olhar renovador sobre um tema
                      cansado
                    </span>
                  </div>
                </div>
                <div className="relative  w-full">
                  <button
                    className={cn(
                      'absolute right-2 top-2 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-5 md:top-5 md:h-8 md:w-24',
                      'bg-white text-black'
                    )}
                  >
                    <text className="font-kernCompressed text-xs font-bold md:text-base">
                      Downloads
                    </text>
                  </button>
                  <button
                    className={cn(
                      'absolute right-24 top-2 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-32  md:top-5 md:h-8 md:w-24',
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
                    width={918}
                    height={316}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="absolute bottom-2 left-2 flex w-2/5 flex-col items-start gap-1 text-white md:bottom-5 md:left-5">
                    <span className="text-sm leading-4 md:text-3xl">
                      Qual o valor da brasilidade criativa?
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative w-full md:w-3/6">
                <div className="relative mb-1 w-full">
                  <button
                    className={cn(
                      'absolute right-2 top-2 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-5 md:top-5 md:h-8 md:w-24',
                      'bg-white text-black'
                    )}
                  >
                    <text className="font-kernCompressed text-xs font-bold md:text-base">
                      Downloads
                    </text>
                  </button>
                  <button
                    className={cn(
                      'absolute right-24 top-2 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-32  md:top-5 md:h-8 md:w-24',
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
                    width={918}
                    height={316}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover'
                    }}
                  />

                  <div className="absolute bottom-2 left-2 flex w-1/3 flex-col items-start gap-1 text-white md:bottom-5 md:left-5">
                    <span className="text-sm leading-4 md:text-3xl">
                      Qual o valor da nova economia?
                    </span>
                  </div>
                </div>
                <div className="relative w-full">
                  <button
                    className={cn(
                      'absolute right-2 top-2 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-5 md:top-5 md:h-8 md:w-24',
                      'bg-white text-black'
                    )}
                  >
                    <text className="font-kernCompressed text-xs font-bold md:text-base">
                      Downloads
                    </text>
                  </button>
                  <button
                    className={cn(
                      'absolute right-24 top-2 flex h-6 w-20 items-center justify-center rounded-sm p-2 md:left-32  md:top-5 md:h-8 md:w-24',
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
                    width={918}
                    height={150}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="absolute bottom-2 left-2 flex w-2/3 flex-col items-start gap-1 text-white md:bottom-5 md:left-5 md:w-2/6">
                    <span className="text-sm leading-4 md:text-3xl">
                      Como as marcas se comportam no meio digital?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="mb-20 flex w-full">
            <div className="relative h-auto w-full flex-col gap-4 px-4">
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
                  width={1865}
                  height={814}
                  style={{ width: '100%', objectFit: 'cover' }}
                />
                <div className="absolute bottom-3 left-3 flex w-1/3 flex-col items-start gap-1 text-white md:bottom-5 md:left-5 md:w-1/6">
                  <span className="text-sm leading-4 md:text-3xl">
                    Branding na cadeira do CEO
                  </span>
                </div>
              </div>
              <div className="my-1 flex flex-col justify-between gap-4 md:my-4 md:flex-row ">
                <div className="relative w-full lg:w-3/6">
                  <div className="relative mb-4 w-full">
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
                      width={918}
                      height={919}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div className="absolute bottom-3 left-3 flex w-2/3 flex-col items-start gap-1 text-white md:bottom-5 md:left-5 md:w-3/5">
                      <span className="text-sm leading-4 md:text-3xl">
                        Proposito decodificado: um olhar renovador sobre um tema
                        cansado
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
                      src={image3}
                      alt="Imagem 3"
                      width={918}
                      height={421}
                      style={{ width: '100%', objectFit: 'cover' }}
                    />
                    <div className="absolute bottom-3 left-3 flex w-2/5 flex-col items-start gap-1 text-white md:bottom-5 md:left-5">
                      <span className="text-sm leading-4 md:text-3xl">
                        Qual o valor da brasilidade criativa?
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative w-full md:w-3/6">
                  <div className="relative mb-4 w-full">
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
                      width={918}
                      height={421}
                      style={{ width: '100%', objectFit: 'cover' }}
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
                      width={918}
                      height={421}
                      style={{ width: '100%', objectFit: 'cover' }}
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
      )}
    </>
  )
}
