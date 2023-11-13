import { createPath } from '@/common/utils/createPathImages'
import BgHome from '@/images/png/home.png'
import BgWhatWeDo from '@/images/png/whatWeDo.png'
import BgWhoWeAre from '@/images/png/whoWeAre.png'
import {
  Background,
  BackgroundsProps,
  ColorTextBackground,
  ColorTextBackgroundProps
} from './footer'

const backgrounds: BackgroundsProps = {
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
  '/cases/': {
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
  '/artigos/': {
    isImage: false,
    color: 'bg-white'
  },
  '/slug-artigo': {
    isImage: false,
    color: 'bg-white'
  }
}

export const pathBackgroundPtBr: Record<string, Background> = createPath(
  '',
  backgrounds
)
export const pathBackgroundEn: Record<string, Background> = createPath(
  'en',
  backgrounds
)

const colorTextBackground: ColorTextBackgroundProps = {
  '/': {
    styles: {
      color: 'text-white'
    }
  },
  '/quem-somos': {
    styles: {
      color: 'text-white'
    }
  },
  '/o-que-fazemos': {
    styles: {
      color: 'text-white'
    }
  },
  '/cases': {
    styles: {
      color: 'text-white'
    }
  },
  '/case/': {
    styles: {
      color: 'text-black'
    }
  },
  '/contato': {
    styles: {
      color: 'text-white',
      minHeight: 'min-h-[auto]'
    }
  },
  '/artigos': {
    styles: {
      color: 'text-white'
    }
  },
  '/artigos/': {
    styles: {
      color: 'text-black'
    }
  },
  '/slug-artigo': {
    styles: {
      color: 'text-black'
    }
  }
}

export const colorTextPtBr: Record<string, ColorTextBackground> = createPath(
  '',
  colorTextBackground
)
export const colorTextEn: Record<string, ColorTextBackground> = createPath(
  'en',
  colorTextBackground
)
