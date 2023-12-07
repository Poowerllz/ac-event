import { cn } from '@/common/utils/cn'
import { AnaCoutoMascot } from '@/components/AnaCoutoMascot'
import { ArrowIcon } from '@/components/ui/Icon'
import useMediaQuery from '@/hooks/useMediaQuery'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type TNavbarSticky = {
  invert?: boolean
}

export function NavbarSticky({ invert }: TNavbarSticky) {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const pathaname = usePathname()

  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMascotVisible, setIsMascotVisible] = useState(false)
  const [isArrowVisible, setIsArrowVisible] = useState(false)

  const handleScrollTop = (selectValue: string) => {
    const section = document.getElementById(selectValue)

    if (section)
      section.scrollIntoView({
        behavior: 'smooth'
      })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMascotVisible(scrollPosition > 100)
  }, [scrollPosition])

  useEffect(() => {
    setIsArrowVisible(scrollPosition > 100)
  }, [scrollPosition])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <nav
          className={cn(
            'fixed z-10 flex w-[80%] items-start justify-between pt-14 opacity-100 transition sm:w-[90%]'
          )}
        >
          {isMascotVisible && (
            <div className="relative mb-5 h-auto w-10">
              <AnaCoutoMascot
                fill={invert ? '' : '#ffffff'}
                className="stroke-black stroke-[0.2px] shadow-2xl"
              />
            </div>
          )}

          {isArrowVisible && (
            <ArrowIcon
              invert={pathaname === '/' ?? true}
              className={cn(
                'h-auto cursor-pointer fill-white stroke-black stroke-[0.5px]',
                isMobile ? 'w-3' : 'w-6'
              )}
              onclick={() => handleScrollTop('header')}
            />
          )}
        </nav>
      </motion.div>
    </AnimatePresence>
  )
}

// ;<ArrowMobile
//   name={ArrowTop}
//   section={'header'}
//   invert={pathaname === '/' ?? true}
// />
