import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MessageProps } from './type'
import Image from 'next/image'

export const Message = ({ title, subTitle }: MessageProps) => {
  return (
    <div className="flex  w-full justify-between px-20 py-32">
      <div className="w-4/6">
        <h1 className="text-8xl">{title}</h1>
      </div>

      <div className="flex w-1/5 flex-col items-end justify-between">
        <div className="-rotate-180 transform">
          <Image
            src={'/arrowdown.svg'}
            alt={'Imagem de uma seta'}
            width={22}
            height={50}
          />
        </div>

        <div className="bottom-0 flex -rotate-90 transform  items-end">
          <div className="mr-3">
            <AiOutlinePlusCircle size={24} />
          </div>
          <span className=" text-sm">{subTitle}</span>
        </div>
      </div>
    </div>
  )
}
