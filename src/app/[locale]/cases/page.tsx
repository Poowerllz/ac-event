import Image from 'next/image'

export default function Cases() {
  return (
    <>
      <div className="md:px-7 md:pt-7">
        <Image
          src={'/images/casesabin.png'}
          alt="Imagem 1"
          objectFit="cover"
          width={1865}
          height={814}
          style={{ width: '100%' }}
        />
      </div>
      <section className="mb-40 flex w-full flex-col gap-10 px-6 py-10 sm:px-16">
        <span className="md:text-xl">Desafio</span>
        <h1 className="font-kernCompressed text-6xl font-bold sm:w-5/12 sm:text-6xl lg:text-8xl">
          Estabelecer uma Marca Corporativa que possa abranger diferentes
          públicos.
        </h1>

        <p className="md:text-1xl self-end text-base font-medium sm:text-lg md:w-5/12 lg:text-2xl">
          O Grupo Sabin nasce a partir da força e da ousadia de duas mulheres,
          há quase quatro décadas, se tornando uma referência em medicina
          diagnóstica em todo o país. Com a expansão de suas operações, se
          transformou em um ecossistema de saúde diversificado e, para isso,
          precisava estabelecer uma marca corporativa que pudesse abranger
          diferentes públicos, integrando assim soluções de saúde para o B2B e
          B2C. <br />
          <br />
          Além disso, o Grupo Sabin, inspirado nas suas fundadoras, tem o
          desafio de expressar sua personalidade única em um mercado com
          territórios comuns, como humanização, proximidade e bem-estar.
        </p>
      </section>
    </>
  )
}
