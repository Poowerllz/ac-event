type Background = {
  isImage: boolean
  src?: StaticImageData
  color?: string
}

export type BackgroundsProps = Record<string, Background>

export interface PathDataProps {
  isImage: boolean
  src?: string
  color?: string
}

export interface FooterContactsProps {
  title: string[]
  subtitle: string
  address: string[]
  social: { name: string; href: string }[]
  copyright: string[]
}
