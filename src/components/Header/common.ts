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
    src: 'https://youtu.be/uYFVJNrOt9g'
  },
  '/cases/': {
    hasBackgroundColor: true,
    color: 'bg-white',
    src: 'https://youtu.be/uYFVJNrOt9g'
  },
  '/artigos': {
    src: 'https://youtu.be/uYFVJNrOt9g'
  },
  '/artigos/': {
    hasBackgroundColor: true,
    color: 'bg-transparent',
    src: ''
  },
  '/slug-artigo': {
    hasBackgroundColor: true,
    color: 'bg-primary',
    src: 'https://youtu.be/uYFVJNrOt9g'
  },
  '/contato': {
    src: 'https://youtu.be/uYFVJNrOt9g'
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
