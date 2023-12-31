'use client'

import { getPathData } from '@/common/utils/getPathData'
import { usePathname } from 'next/navigation'
import { colorTypeLogoEn, colorTypeLogoPtBr } from './common'
import { colorTypographicLogoProps } from './type'

export function AnaCoutoMascot({
  fill,
  className = ''
}: {
  fill?: string
  className?: string
}) {
  const rawPath: string = usePathname()
  const pathData: colorTypographicLogoProps = getPathData(
    rawPath,
    colorTypeLogoPtBr,
    colorTypeLogoEn
  )

  return (
    <svg
      id="AnaCoutoMascot"
      data-name="AnaCoutoMascot"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29.8 43.18"
      style={{ fill: fill ?? pathData?.color }}
      className={className}
    >
      <path d="m7.49,17.09c1.96-1.13,4.99,1.05,7.41,1.06,2.43,0,5.47-2.18,7.44-1.04,1.32.76,1.63,2.63,2,4.39,2.1-2.28,3.39-5.33,3.39-8.68C27.72,5.74,21.98,0,14.9,0S2.07,5.74,2.07,12.82c0,3.35,1.29,6.4,3.4,8.69.38-1.78.68-3.65,2.02-4.42h0Z" />
      <path d="m25.19,24.09c-.41-.71-.63-1.63-.83-2.58-2.35,2.54-5.72,4.13-9.46,4.13s-7.1-1.58-9.45-4.12c-.2.94-.42,1.84-.83,2.54-1.14,1.97-4.62,3.48-4.62,5.91s3.48,3.94,4.61,5.89c1.17,2.03.8,5.8,2.83,6.97,1.97,1.14,5.02-1.03,7.46-1.03s5.46,2.18,7.43,1.05c2.04-1.17,1.67-4.93,2.85-6.96,1.14-1.96,4.63-3.48,4.62-5.91,0-2.42-3.48-3.94-4.61-5.89Z" />
    </svg>
  )
}
