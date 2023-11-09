import { createPath } from '@/common/utils/createPathImages'
import { VideoHeaderProps, VideosHeaderProps } from './type'

const videosHeader: VideosHeaderProps = {
  '/': {
    src: '../images/home/background.mp4'
  },
  '/quem-somos': {
    src: '../images/home/background.mp4'
  },
  '/o-que-fazemos': {
    src: '../images/home/background.mp4'
  },
  '/cases': {
    src: '../images/home/background.mp4'
  },
  '/artigos': {
    src: '../images/home/background.mp4'
  },
  '/contato': {
    src: '../images/home/background.mp4'
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
