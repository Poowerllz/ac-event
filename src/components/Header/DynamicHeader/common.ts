import { createPath } from '@/common/utils/createPathImages'
import { BackgroundHeaderProps, BackgroundsHeaderProps } from './type'

const backgroundsHeader: BackgroundsHeaderProps = {
  '/': {
    mobile: 'mobile-contato.png',
    desktop: 'contatos.png',
    showText: true
  },
  '/o-que-fazemos': {
    mobile: 'mobile-oquefazemos.png',
    desktop: 'oquefazemos.png',
    invert: true
  },
  '/quem-somos': {
    mobile: 'mobile-quemsomos.png',
    desktop: 'quemsomos.png',
    invert: true
  },
  '/artigos': {
    mobile: 'mobile-artigos-reduced.png',
    desktop: 'artigos-reduced.png'
  },
  '/cases': {
    mobile: 'mobile-cases-reduced.png',
    desktop: 'cases-reduced.png',
    invert: true
  },
  '/cases/': {
    hasBackgroundColor: true,
    color: 'bg-primary'
  },
  '/contato': {
    mobile: 'mobile-contato.png',
    desktop: 'contatos.png'
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
