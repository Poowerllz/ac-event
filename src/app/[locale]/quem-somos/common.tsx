import { ImageGalleryExecutiveTeam } from '@/components/ImageGalleryExecutiveTeam'
import { ImageGalleryWhoWeAre } from '@/components/ImageGalleryWhoWeAre'
import firstImage from '@/images/png/whoWeAreS3Img1.png'
import secondImage from '@/images/png/whoWeAreS3Img2.png'
import thirdImage from '@/images/png/whoWeAreS3Img3.png'
import fourthImage from '@/images/png/whoWeAreS3Img4.png'

export function GallerySection() {
  const images = [firstImage, secondImage, thirdImage, fourthImage]

  return <ImageGalleryWhoWeAre images={images} />
}

export function ExecutiveTeamSection() {
  return <ImageGalleryExecutiveTeam />
}
