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
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false)
  const pathaname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      const triggerHeight = 100

      if (scrollY > triggerHeight && !isNavbarVisible) {
        setIsNavbarVisible(true)
      } else if (scrollY <= triggerHeight && isNavbarVisible) {
        setIsNavbarVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [invert, isNavbarVisible])

  return (
    <AnimatePresence>
      {isNavbarVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav
            className={cn(
              'fixed z-10 flex w-[92%] items-start justify-between pt-14 opacity-100 transition'
            )}
          >
            <div className="relative mb-5 h-auto w-10">
              <AnaCoutoMascot
                fill={invert ? '' : '#ffffff'}
                className="shadow-2xl"
              />
            </div>
            <ArrowMobile
              name={ArrowTop}
              section={'header'}
              invert={pathaname === '/' ?? true}
            />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
