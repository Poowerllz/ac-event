import { createPath } from '@/common/utils/createPathImages'
import { VideoHeaderProps, VideosHeaderProps } from './type'

const videosHeader: VideosHeaderProps = {
  '/': {
    src: '/images/background-black.png'
  },
  '/quem-somos': {
    src: '/images/background-black.png'
  },
  '/o-que-fazemos': {
    src: '/images/background-black.png'
  },
  '/cases': {
    src: ''
  },
  '/cases/': {
    hasBackgroundColor: true,
    color: 'bg-white',
    src: ''
  },
  '/artigos': {
    src: ''
  },
  '/artigos/': {
    hasBackgroundColor: true,
    color: 'bg-transparent',
    src: ''
  },
  '/contato': {
    src: ''
  }
}

export const pathVideoPtBr: Record<string, VideoHeaderProps> = createPath(
  '',
  videosHeader
)
export const pathVideoEn: Record<string, VideoHeaderProps> = createPath(
  'en',
  videosHeader
)
