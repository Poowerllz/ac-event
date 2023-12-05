import { cn } from '@/common/utils/cn'
import { AnaCoutoMascot } from '@/components/AnaCoutoMascot'
import { ArrowMobile } from '@/components/arrowMobile'
import ArrowTop from '@/images/svg/arrowtop.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type TNavbarSticky = {
  invert?: boolean
}

export function NavbarSticky({ invert }: TNavbarSticky) {
  const pathaname = usePathname()

  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMascotVisible, setIsMascotVisible] = useState(false)
  const [isArrowVisible, setIsArrowVisible] = useState(false)

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
    setIsArrowVisible(scrollPosition > 1000)
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
            'fixed z-10 flex w-[82%] items-start justify-between pt-14 opacity-100 transition sm:w-[92%]'
          )}
        >
          {isMascotVisible && (
            <div className="relative mb-5 h-auto w-10">
              <AnaCoutoMascot
                fill={invert ? '' : '#ffffff'}
                className="shadow-2xl"
              />
            </div>
          )}

          {isArrowVisible && (
            <ArrowMobile
              name={ArrowTop}
              section={'header'}
              invert={pathaname === '/' ?? true}
            />
          )}
        </nav>
      </motion.div>
    </AnimatePresence>
  )
}
