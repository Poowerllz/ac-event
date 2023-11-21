'use client'
import useMediaQuery from '@/hooks/useMediaQuery'
import Link from 'next/link'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ArrowMobile } from '../arrowMobile'
import { Typography } from '../ui/Typography'
import { MessageProps } from './type'
import { useState } from 'react'
import ArrowTop from '@/images/svg/arrowtop.svg'

export const Message = ({
  title,
  subTitle,
  arrow,
  pathSubtitle,
  section,
  top
}: MessageProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const scrollToTop = (category: string) => {
    setSelectedCategory(category)
    const section = document.getElementById(category)
    if (section)
      section.scrollIntoView({
        behavior: 'smooth'
      })
  }

  const handleSelectChange = (selectValue: string) => {
    scrollToTop(selectValue)
  }

  return (
    <>
      {isMobile ? (
        <>
          {arrow ? (
            <div className=" flex h-auto w-full flex-col items-center justify-between px-6 pb-44 pt-40">
              <Typography as="h1">{title}</Typography>

              <div className="relative flex h-full w-full flex-col  justify-between">
                <div className="absolute -top-72  h-full w-full -rotate-180 transform cursor-pointer">
                  <ArrowMobile name={ArrowTop} />
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
            <div className="relative flex h-auto w-full flex-col items-center justify-between px-6 pb-60 pt-40">
              <Typography as="h1">{title}</Typography>

              <div className="relative flex h-full w-full flex-col  justify-between">
                {arrow && (
                  <div className="absolute -top-44  h-full w-full -rotate-180 transform cursor-pointer">
                    <ArrowMobile name={ArrowTop} />
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
          <div className="relative flex h-auto  w-full flex-col justify-between px-16 py-24 ">
            {/*py-32*/}
            {arrow ? (
              <div className="flex h-full w-full justify-between  align-top">
                <Typography as="h1">{title}</Typography>

                <div className="-rotate-360 flex h-full w-full transform items-end pr-80">
                  <div
                    className="cursor-pointer "
                    onClick={() => handleSelectChange(section || '')}
                  >
                    <ArrowMobile name={ArrowTop} />
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
