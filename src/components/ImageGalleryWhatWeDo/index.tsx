import { Fragment } from 'react'
import { ImageGalleryWhatWeDoDesktop } from './desktop'
import { ImageGalleryWhatWeDoMobile } from './mobile'
import { ImageGalleryWhatWeDoProps } from './type'

export function ImageGalleryWhatWeDo({
  images,
  text
}: ImageGalleryWhatWeDoProps) {
  return (
    <Fragment>
      <ImageGalleryWhatWeDoDesktop images={images} />
      <ImageGalleryWhatWeDoMobile images={images} />
    </Fragment>
  )
}
