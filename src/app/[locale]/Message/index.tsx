import { FaBars } from 'react-icons/fa'
import { MessageProps } from './type'

export const Message = ({ title, subTitle }: MessageProps) => {
  return (
    <div className="flex h-screen w-full justify-between px-20 py-32">
      <div className="w-4/6 pr-28">
        <h1 className="text-8xl">{title}</h1>
      </div>

      <div className="flex w-1/5 flex-col items-end justify-between">
        <div>
          <FaBars size={24} />
        </div>

        <div className="flex flex-col items-center">
          <span className="-rotate-90 transform text-sm">{subTitle}</span>
          <div className="mt-8">
            <FaBars size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}
