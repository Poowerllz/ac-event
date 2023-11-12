import { StaticImageData } from 'next/image'

export interface ImageGalleryWhatWeDoProps {
  images: StaticImageData[] | string[]
  text?: string
}
