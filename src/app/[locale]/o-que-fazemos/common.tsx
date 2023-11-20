import { ImageGalleryWhatWeDo } from '@/components/ImageGalleryWhatWeDo'
import firstImage from '@/images/png/whoWeAreS3Img1.png'
import secondImage from '@/images/png/whoWeDoS3Img2.png'
import thirdImage from '@/images/png/whoWeDoS3Img3.png'
import fourthImage from '@/images/png/whoWeDoS3Img4.png'

export function GallerySection() {
  const images = [firstImage, secondImage, thirdImage, fourthImage]

  return <ImageGalleryWhatWeDo images={images} />
}
