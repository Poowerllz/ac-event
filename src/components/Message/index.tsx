'use client'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MessageProps } from './type'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import useMediaQuery from '@/hooks/useMediaQuery'
import { ArrowMobile } from '../arrowMobile'

export const Message = ({ title, subTitle, arrow }: MessageProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {isMobile ? (
        <>
          <div className="md:px:20 relative flex h-auto w-full flex-col items-center justify-between px-3 py-20 md:h-screen md:flex-row">
            <h1 className="w-full font-kernCompressed text-4xl font-bold sm:text-6xl md:pr-80 lg:text-8xl">
              {title}
            </h1>

            <div className="relative flex h-full w-full flex-col  justify-between md:w-auto ">
              {arrow && (
                <div className="absolute -top-52 h-full w-full -rotate-180 transform  md:relative">
                  <ArrowMobile name={'arrowtop'} />
                </div>
              )}

              <div className="absolute -right-11 ml-auto flex -rotate-90 transform items-center justify-end  md:relative md:mr-3  ">
                <AiOutlinePlusCircle size={20} />
                <p className="w-100 ml-1 text-xs md:ml-3">{subTitle}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative flex h-screen w-full flex-col justify-between px-20  py-32">
            <div className="flex h-full w-full justify-between align-top">
              <h1 className="pr-96 font-kernCompressed font-bold lg:text-8xl">
                {title}
              </h1>

              <div className="flex h-full -rotate-180 transform pl-80 align-top">
                <ArrowMobile name="arrowtop" />
              </div>
            </div>

            <div className="flex w-full justify-end pl-20 ">
              <div className="absolute bottom-44 right-3 flex -rotate-90 transform items-center justify-end ">
                <AiOutlinePlusCircle size={24} />
                <p className="w-100 ml-3">{subTitle}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
