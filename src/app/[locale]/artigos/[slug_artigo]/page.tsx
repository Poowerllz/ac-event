import { shimmer } from '@/common/utils/shimmer'
import { toBase64 } from '@/common/utils/toBase64'
import { Input } from '@/components/ui/Input'
import Image1 from '@/images/png/article-example-1.png'
import BackgroundForm from '@/images/png/background-form-article.png'
import Send from '@/images/svg/send.svg'
import Image from 'next/image'
import { Fragment } from 'react'

export default function SlugArtigo() {
  return (
    <Fragment>
      <section className="flex w-full flex-col gap-10 bg-primary px-6 py-10 pb-32 sm:mb-40 sm:px-16">
        <h1 className="self-center text-center font-kernCompressed text-5xl font-bold sm:w-3/5 sm:text-6xl lg:text-7xl">
          Organização e ideias em ação: baixe o seu calendário 2023
        </h1>
      </section>

      <section className="flex w-full flex-col gap-10 p-8 sm:px-16">
        <div className="flex flex-col items-start justify-between gap-20 sm:flex-row sm:gap-40">
          <span className="font-bold">Insights</span>
          <p>
            2023 já está no ar! E essa viagem já começou repleta de
            acontecimentos. Para você “Ser, fazer e falar” neste ano,
            disponibilizamos um calendário com um universo visual feito com a
            nossa identidade. Se organize e dispare suas ideias. <br />
            <br /> Para baixar, basta preencher o formulário. Vamos nessa?
          </p>
        </div>

        <form className="flex w-full flex-col lg:flex-row">
          <div className="flex w-full flex-col justify-center bg-off_white p-16 max-[420px]:p-8 sm:p-36">
            <h3 className="text-3xl font-bold">Inscreve-se aqui</h3>
            <span className="mb-4">
              Preencha o formulário para acessar o calendário.
            </span>

            <div className="mb-6 flex flex-col gap-6">
              <Input placeholder="Nome" className="placeholder:text-black" />
              <Input placeholder="E-mail" className="placeholder:text-black" />
              <Input placeholder="Empresa" className="placeholder:text-black" />
              <Input
                placeholder="Cargog atual"
                className="placeholder:text-black"
              />
              <Input
                placeholder="Númerode colaboradores"
                className="placeholder:text-black"
              />
            </div>

            <button className="w-full bg-white py-3 font-bold">Enviar</button>
          </div>

          <div className="relative flex w-full justify-center bg-black">
            <Image
              src={BackgroundForm}
              alt="Background"
              objectFit="contain"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </form>

        <div className="flex items-start gap-10">
          <span className="font-bold">Compartilhe</span>
          <span className="font-bold">Facbook | Twitter</span>
        </div>
      </section>

      <section className="flex w-full flex-col gap-10 bg-black p-8 sm:mb-40 sm:px-16">
        <div className="flex items-start justify-between">
          <span className="text-base font-bold text-white">
            Veja mais insights
          </span>

          <button className="flex items-center justify-center gap-2 self-end">
            <span className="leading-3 text-white">Ver todos</span>
            <Image src={Send} alt="Send" width={24} height={24} />
          </button>
        </div>

        <div className="flex w-full gap-4">
          <div className="relative flex h-auto w-full justify-between">
            <span className="absolute left-5 top-1 hidden rounded-md bg-white px-2 py-[0.1rem] font-bold sm:top-5 sm:block sm:py-1">
              Artigos
            </span>

            <Image
              src={Image1}
              alt="Image"
              className="bg-cover"
              style={{ height: 'auto', width: '100%' }}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />

            <h5 className="absolute bottom-1 left-5 text-base font-bold text-white transition hover:border-b-[0.5px] hover:border-b-primary max-[425px]:text-sm sm:bottom-5 sm:text-2xl">
              Marketing para um mundo vuca
            </h5>
          </div>

          <div className="relative flex h-auto w-full justify-between">
            <span className="absolute left-5 top-1 hidden rounded-md bg-white px-2 py-[0.1rem] font-bold sm:top-5 sm:block sm:py-1">
              Artigos
            </span>

            <Image
              src={Image1}
              alt="Image"
              className="bg-cover"
              style={{ height: 'auto', width: '100%' }}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />

            <h5 className="absolute bottom-1 left-5 text-base font-bold text-white transition hover:border-b-[0.5px] hover:border-b-primary max-[425px]:text-sm sm:bottom-5 sm:text-2xl">
              Marketing para um mundo vuca
            </h5>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
