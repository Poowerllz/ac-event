import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MessageProps } from './type'
import Image from 'next/image'

export const Message = ({ title, subTitle }: MessageProps) => {
  return (
    <div className="flex h-screen w-full justify-between px-20 py-32">
      <div className="w-4/6 pr-96">
        <h1 className="pr-14 text-8xl">{title}</h1>
      </div>

      <div className="flex w-1/5 flex-col items-end justify-between">
        <div className="-rotate-180 transform">
          <Image src={'/arrowdown.svg'} alt={'Imagem'} width={22} height={50} />
        </div>

        <div className="flex flex-col items-center">
          <span className="-rotate-90 transform text-sm">{subTitle}</span>
          <div className="mt-8">
            <AiOutlinePlusCircle size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}
