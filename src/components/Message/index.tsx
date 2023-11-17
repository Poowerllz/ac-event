'use client'
import useMediaQuery from '@/hooks/useMediaQuery'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ArrowMobile } from '../arrowMobile'
import { Typography } from '../ui/Typography'
import { MessageProps } from './type'
import Link from 'next/link'

export const Message = ({
  title,
  subTitle,
  arrow,
  pathSubtitle
}: MessageProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <>
      {isMobile ? (
        <>
          {arrow ? (
            <div className=" flex h-auto w-full flex-col items-center justify-between px-6 pb-80 pt-60">
              <Typography as="h1">{title}</Typography>

              <div className="relative flex h-full w-full flex-col  justify-between">
                <div className="absolute -top-72  h-full w-full -rotate-180 transform cursor-pointer">
                  <ArrowMobile name={'arrowtop'} />
                </div>

                <Link href={pathSubtitle}>
                  <div className="absolute -right-11 top-28 ml-auto flex -rotate-90  transform cursor-pointer items-center justify-end">
                    <AiOutlinePlusCircle size={20} />
                    <p className="w-100 ml-1 text-xs ">{subTitle}</p>
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="relative flex h-auto w-full flex-col items-center justify-between px-6 pb-96 pt-28">
              <Typography as="h1">{title}</Typography>

              <div className="relative flex h-full w-full flex-col  justify-between">
                {arrow && (
                  <div className="absolute -top-44  h-full w-full -rotate-180 transform cursor-pointer">
                    <ArrowMobile name={'arrowtop'} />
                  </div>
                )}
                <Link href={pathSubtitle}>
                  <div className="absolute -right-11 top-32 ml-auto flex -rotate-90 transform cursor-pointer items-center justify-end ">
                    <AiOutlinePlusCircle size={20} />
                    <p className="w-100 ml-1 text-xs">{subTitle}</p>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="relative flex h-auto  w-full flex-col justify-between px-16 py-52 ">
            {/*py-32*/}
            {arrow ? (
              <div className="flex h-full w-full justify-between  align-top">
                <Typography as="h1">{title}</Typography>

                <div className="flex h-full w-full -rotate-180 transform items-end pr-80">
                  <div className="cursor-pointer ">
                    <ArrowMobile name="arrowtop" />
                  </div>
                </div>
              </div>
            ) : (
              <div className=" flex h-full w-full justify-between pr-80 align-top">
                <Typography as="h1">{title}</Typography>
              </div>
            )}

            <div className="flex w-full justify-end pl-20 ">
              <Link href={pathSubtitle}>
                <div className="absolute bottom-44 right-0 flex -rotate-90 transform cursor-pointer items-center justify-end ">
                  <AiOutlinePlusCircle size={24} />
                  <p className="w-100 ml-3">{subTitle}</p>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
