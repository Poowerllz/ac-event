import { createPath } from '@/common/utils/createPathImages'
import { BackgroundHeaderProps, BackgroundsHeaderProps } from './type'

const backgroundsHeader: BackgroundsHeaderProps = {
  '/': {
    mobile: 'background-orange-mobile.png',
    desktop: 'background-orange.png',
    showText: true
  },
  '/o-que-fazemos': {
    mobile: 'background-black-mobile.png',
    desktop: 'background-black.png'
  },
  '/quem-somos': {
    mobile: 'background-white-mobile.png',
    desktop: 'background-white.png',
    invert: true
  },
  '/artigos': {
    mobile: 'background-white-mobile.png',
    desktop: 'background-white.png',
    invert: true
  },
  '/cases': {
    mobile: 'background-white-mobile.png',
    desktop: 'background-white.png',
    invert: true
  },
  '/cases/': {
    hasBackgroundColor: true,
    color: 'bg-primary'
  },
  '/contato': {
    mobile: 'background-contato-mobile.png',
    desktop: 'background-contato-desktop.png'
  }
}

export const pathImagesBr: Record<string, BackgroundHeaderProps> = createPath(
  '',
  backgroundsHeader
)
export const pathImagesEn: Record<string, BackgroundHeaderProps> = createPath(
  'en',
  backgroundsHeader
)
