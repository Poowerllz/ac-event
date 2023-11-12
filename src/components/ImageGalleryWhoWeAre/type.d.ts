import { StaticImageData } from 'next/image'

export interface ImageGalleryWhoWeAreProps {
  images: StaticImageData[] | string[]
  text?: string
}
