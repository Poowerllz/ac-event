import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MessageProps } from './type'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export const Message = ({ title, subTitle }: MessageProps) => {
  const t = useTranslations('Contact')
  return (
    <div className="md:px:20 relative flex w-full justify-between px-10 py-32">
      <h1 className="font-kernCompressed text-6xl font-bold sm:w-3/5 sm:text-6xl lg:text-8xl">
        {t('firstSection.title')}
      </h1>

      <div className="bottom-0 right-0  flex w-1/5 flex-col  justify-between md:relative ">
        <div className="w-full -rotate-180 transform">
          <Image
            src={'/arrowdown.svg'}
            alt={'Imagem de uma seta'}
            width={22}
            height={50}
          />
        </div>

        <div className="bottom-0 flex w-full -rotate-90 transform items-center  pl-20 align-bottom">
          <div className="flex align-bottom">
            <div className="mr-3 items-end">
              <AiOutlinePlusCircle size={24} />
            </div>

            <p className="w-100 ml-3">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
