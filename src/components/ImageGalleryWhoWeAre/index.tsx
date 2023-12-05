import { Fragment } from 'react'
import { ImageGalleryWhoWeAreDesktop } from './desktop'
import { ImageGalleryWhoWeAreMobile } from './mobile'
import { ImageGalleryWhoWeAreProps } from './type'

export function ImageGalleryWhoWeAre({
  images,
  text
}: ImageGalleryWhoWeAreProps) {
  return (
    <Fragment>
      <ImageGalleryWhoWeAreDesktop images={images} />
      <ImageGalleryWhoWeAreMobile images={images} />
    </Fragment>
  )
}
