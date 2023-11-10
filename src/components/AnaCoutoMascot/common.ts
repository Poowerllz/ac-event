import { createPath } from '@/common/utils/createPathImages'
import { colorTypographicLogoProps, colorsTypographicLogoProps } from './type'

const colors: colorsTypographicLogoProps = {
  '/': {
    color: '#fff'
  },
  '/quem-somos': {
    color: '#fff'
  },
  '/o-que-fazemos': {
    color: '#fff'
  },
  '/cases': {
    color: '#fff'
  },
  '/case/': {
    color: '#fff'
  },
  '/artigos': {
    color: '#fff'
  },
  '/slug-artigo': {
    color: '#000'
  },
  '/contato': {
    color: '#fff'
  }
}

export const colorTypeLogoPtBr: Record<string, colorTypographicLogoProps> =
  createPath('', colors)
export const colorTypeLogoEn: Record<string, colorTypographicLogoProps> =
  createPath('en', colors)
