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
    </>
  )
}
