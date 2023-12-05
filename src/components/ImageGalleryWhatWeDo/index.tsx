import { ImageGalleryWhatWeDoDesktop } from './desktop'
import { ImageGalleryWhatWeDoMobile } from './mobile'
import { ImageGalleryWhatWeDoProps } from './type'

export function ImageGalleryWhatWeDo({
  images,
  text
}: ImageGalleryWhatWeDoProps) {
  const isMobileView = typeof window !== 'undefined' && window.innerWidth <= 600

  console.log('isMobileView: ', isMobileView)

  return isMobileView ? (
    <ImageGalleryWhatWeDoMobile images={images} />
  ) : (
    // <ImageGalleryWhatWeDoDesktop images={images} />
    <ImageGalleryWhatWeDoMobile images={images} />
  )
}
