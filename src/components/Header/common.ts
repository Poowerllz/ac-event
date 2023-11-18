import { createPath } from '@/common/utils/createPathImages'
import { VideoHeaderProps, VideosHeaderProps } from './type'

const videosHeader: VideosHeaderProps = {
  '/': {
    src: 'https://youtu.be/uYFVJNrOt9g'
  },
  '/quem-somos': {
    src: 'https://youtu.be/uYFVJNrOt9g'
  },
  '/o-que-fazemos': {
    src: 'https://youtu.be/uYFVJNrOt9g'
  },
  '/cases': {
    src: '/images/header_placeholder.png'
  },
  '/cases/': {
    hasBackgroundColor: true,
    color: 'bg-white',
    src: '/images/header_placeholder.png'
  },
  '/artigos': {
    src: '/images/header_placeholder.png'
  },
  '/artigos/': {
    hasBackgroundColor: true,
    color: 'bg-transparent',
    src: '/images/header_placeholder.png'
  },
  '/contato': {
    src: '/images/header_placeholder.png'
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
