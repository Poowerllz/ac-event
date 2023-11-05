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
          {arrow ? (
            <div className="md:px:20 relative flex h-auto w-full flex-col items-center justify-between px-3 pb-80 pt-60 md:h-screen md:flex-row">
              <h1 className="w-full font-kernCompressed text-4xl font-bold sm:text-6xl md:pr-80 lg:text-8xl">
                {title}
              </h1>

              <div className="relative flex h-full w-full flex-col  justify-between md:w-auto ">
                <div className="absolute -top-72  h-full w-full -rotate-180 transform cursor-pointer  md:relative">
                  <ArrowMobile name={'arrowtop'} />
                </div>

                <div className="absolute -right-11 top-28 ml-auto flex -rotate-90  transform cursor-pointer items-center justify-end  md:relative   ">
                  <AiOutlinePlusCircle size={20} />
                  <p className="w-100 ml-1 text-xs ">{subTitle}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="md:px:20 relative flex h-auto w-full flex-col items-center justify-between px-3 pb-96 pt-28 md:h-screen md:flex-row">
              <h1 className="w-full font-kernCompressed text-4xl font-bold sm:text-6xl ">
                {title}
              </h1>

              <div className="relative flex h-full w-full flex-col  justify-between md:w-auto ">
                {arrow && (
                  <div className="absolute -top-44  h-full w-full -rotate-180 transform cursor-pointer  md:relative">
                    <ArrowMobile name={'arrowtop'} />
                  </div>
                )}

                <div className="absolute -right-11 top-32 ml-auto flex -rotate-90 transform cursor-pointer items-center justify-end  md:relative md:mr-3  ">
                  <AiOutlinePlusCircle size={20} />
                  <p className="w-100 ml-1 text-xs">{subTitle}</p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="relative flex h-screen w-full flex-col justify-between px-14  py-32">
            {arrow ? (
              <div className="flex h-full w-full justify-between align-top">
                <h1 className="pr-1 font-kernCompressed font-bold lg:text-8xl">
                  {title}
                </h1>

                <div className="flex h-full w-full -rotate-180 transform items-end pr-80">
                  <div className="cursor-pointer">
                    <ArrowMobile name="arrowtop" />
                  </div>
                </div>
              </div>
            ) : (
              <div className=" flex h-full w-full justify-between pr-80 align-top">
                <h1 className="pr-96 font-kernCompressed font-bold lg:text-8xl">
                  {title}
                </h1>
              </div>
            )}

            <div className="flex w-full justify-end pl-20 ">
              <div className="absolute bottom-44 right-0 flex -rotate-90 transform cursor-pointer items-center justify-end ">
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
