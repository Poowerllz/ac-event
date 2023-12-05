'use client'

import { useIsVisible } from '@/hooks/useIsVisible'
import {
  ComponentProps,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import { typographies } from './common'

export const TypographyDefaultAsType = 'span' as const
export type TTypographyDefaultAsType = typeof TypographyDefaultAsType

export type TypographyOwnProps<E extends ElementType> = {
  children: ReactNode
  as?: E
  animation?: boolean
  className?: string
}

export type TypographyProps<E extends ElementType> = TypographyOwnProps<E> &
  Omit<ComponentProps<E>, keyof TypographyOwnProps<E>>

export const Typography = <E extends ElementType = TTypographyDefaultAsType>({
  children,
  as,
  animation = true,
  ...props
}: TypographyProps<E>) => {
  const Tag = as || TypographyDefaultAsType
  const defaultConfig = typographies[Tag as keyof typeof typographies]

  const [config, setConfig] = useState<string>(
    defaultConfig?.className + ' ' + props.className
  )
  const { className, ...restProps } = props

  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(ref)

  if (!animation) {
    return (
      <Tag className={config || ''} {...restProps}>
        {children}
      </Tag>
    )
  }

  return (
    <div ref={ref} className="relative h-auto w-auto overflow-hidden">
      <Tag className={config.trim() || ''} {...restProps}>
        {children}
      </Tag>
    </div>
  )
}
