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

      <section className="flex w-full flex-col gap-1 md:gap-7 md:p-7">
        <div className="flex flex-col gap-1 md:flex-row md:gap-7">
          <div className="flex-1">
            <Image
              src={'/images/s.png'}
              alt="Imagem 1"
              objectFit="cover"
              width={1865}
              height={814}
              style={{ width: 'auto' }}
            />
          </div>
          <div className="flex-1">
            <Image
              src={'/images/sorriso.png'}
              alt="Imagem 1"
              objectFit="cover"
              width={1865}
              height={814}
              style={{ width: 'auto' }}
            />
          </div>
        </div>
        <div className="w-full">
          <Image
            src={'/images/gruposabin.png'}
            alt="Imagem 1"
            objectFit="cover"
            width={1865}
            height={814}
            style={{ width: '100%' }}
          />
        </div>
      </section>

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

      <section className="flex w-full flex-col gap-1 md:gap-7 md:p-7">
        <div className="flex flex-col gap-1 md:flex-row md:gap-7">
          <div className="flex-1">
            <Image
              src={'/images/quadro.png'}
              alt="Imagem 1"
              objectFit="cover"
              width={1865}
              height={814}
              style={{ width: 'auto' }}
            />
          </div>
          <div className="flex-1">
            <Image
              src={'/images/sacola.png'}
              alt="Imagem 1"
              objectFit="cover"
              width={1865}
              height={814}
              style={{ width: 'auto' }}
            />
          </div>
        </div>
        <div className="w-full">
          <Image
            src={'/images/sorrisomulheres.png'}
            alt="Imagem 1"
            objectFit="cover"
            width={1865}
            height={814}
            style={{ width: '100%' }}
          />
        </div>
      </section>

      <section className="flex h-auto w-full flex-col items-start justify-between gap-16 px-6 pb-52 pt-16 sm:px-16 md:flex-row md:gap-72">
        <div className="flex-1">
          <h1 className="font-bold">Ficha técnica</h1>
        </div>
        <div className="flex-1">
          <h1 className="font-bold">Ana Couto</h1>
          <p className="font-medium">
            Sócio-Diretor de Marca – Napoleon Fujisawa <br />
            Gerente de Estratégia – Luiza Cortoni <br />
            Estrategista – Marcela Deliza <br />
            Atendimento – Ana Paula Rondinelli <br />
            Conteúdo – Amanda Cinelli e Lucas Figueira <br />
            Designers Gráficos – Thalles Ferreira e Davi Friese <br />
            Refino Tipográfico – Fabio Haag Type <br />
            Produção/Arte-finalistas – João Braz e Priscila Pollo
          </p>
        </div>
        <div className="flex-1">
          <h1 className="font-bold">Cliente</h1>
          <p className="font-medium">
            CEO – Lídia Abdalla <br />
            Sócia-fundadora – Sandra Costa <br />
            Sócia-fundadora – Janete Vaz <br />
            Dir. de Relacionamento – Bruno Siqueira <br />
            Head de Marketing – Leonardo Alves{' '}
          </p>
        </div>
      </section>

      <section className="flex h-screen w-full flex-col justify-between bg-black px-6 py-10 sm:px-16 md:px-7">
        <span className="text-white md:text-xl">Outros cases</span>
        <div className="relative flex flex-col gap-1 md:flex-row md:gap-6 ">
          <div className="relative flex-1">
            <Image
              src={'/images/caseZuk.png'}
              alt="Imagem 1"
              objectFit="cover"
              width={1865}
              height={814}
              style={{ width: 'auto' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="md:text-4xl">Zuk</span>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={'/images/caseNatura.png'}
              alt="Imagem 1"
              objectFit="cover"
              width={1865}
              height={814}
              style={{ width: 'auto' }}
            />
            <div className="absolute bottom-5 left-5 flex flex-col items-start gap-1 text-white">
              <span className="md:text-4xl">Zuk</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
