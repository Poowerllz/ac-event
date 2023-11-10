export type Background = {
  isImage: boolean
  src?: StaticImageData
  color?: string
}

export type BackgroundsProps = Record<string, Background>

export interface FooterContactsProps {
  title: string[]
  subtitle: string
  address: string[]
  social: { name: string; href: string }[]
  copyright: string[]
}

export type ColorTextBackground = {
  styles: {
    color: string
    minHeight?: string
  }
}

export type ColorTextBackgroundProps = Record<string, ColorTextBackground>
