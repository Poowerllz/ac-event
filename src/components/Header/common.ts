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
