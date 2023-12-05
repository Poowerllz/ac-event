import { ImageGalleryWhoWeAreDesktop } from './desktop'
import { ImageGalleryWhoWeAreMobile } from './mobile'
import { ImageGalleryWhoWeAreProps } from './type'

export function ImageGalleryWhoWeAre({
  images,
  text
}: ImageGalleryWhoWeAreProps) {
  const isMobileView = typeof window !== 'undefined' && window.innerWidth <= 600

  return isMobileView ? (
    <ImageGalleryWhoWeAreMobile images={images} />
  ) : (
    <ImageGalleryWhoWeAreDesktop images={images} />
  )
}
