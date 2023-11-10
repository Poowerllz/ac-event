import { createPath } from '@/common/utils/createPathImages'
import BgHome from '@/images/png/home.png'
import BgWhatWeDo from '@/images/png/whatWeDo.png'
import BgWhoWeAre from '@/images/png/whoWeAre.png'
import { BackgroundsProps, PathDataProps } from './footer'

export const backgrounds: BackgroundsProps = {
  '/': {
    isImage: true,
    src: BgHome
  },
  '/quem-somos': {
    isImage: true,
    src: BgWhoWeAre
  },
  '/o-que-fazemos': {
    isImage: true,
    src: BgWhatWeDo
  },
  '/cases': {
    isImage: false,
    color: 'bg-black'
  },
  '/case/': {
    isImage: false,
    color: 'bg-black'
  },
  '/contato': {
    isImage: false,
    color: 'bg-black'
  },
  '/artigos': {
    isImage: false,
    color: 'bg-black'
  },
  '/slug-artigo': {
    isImage: false,
    color: 'bg-white'
  }
}

export const pathBackgroundPtBr: Record<string, PathDataProps> = createPath(
  '',
  backgrounds
)
export const pathBackgroundEn: Record<string, PathDataProps> = createPath(
  'en',
  backgrounds
)
