'use client'

import useMediaQuery from '@/hooks/useMediaQuery'
import Chart from '@/images/svg/whoWeAreChart.svg'
import ChartMobile from '@/images/svg/whoWeAreChartMobile.svg'
import Image from 'next/image'

export function WhoWeAreChart() {
  const isMobile = useMediaQuery('(max-width: 640px)')

  return (
    <div className="relative h-auto w-full">
      <Image
        property="true"
        src={isMobile ? ChartMobile : Chart}
        alt="Orgonograma de como a Ana Couto vê o desenvolvimento de uma marca"
        style={{ height: 'auto', width: '100%' }}
      />
    </div>
  )
}
