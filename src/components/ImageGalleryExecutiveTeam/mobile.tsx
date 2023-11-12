import placeholder from '@/images/png/placeholder.png'
import Image from 'next/image'
import { ImageGalleryExecutiveTeamTitle } from './ImageGalleryExecutiveTeamTitle'

export function ImageGalleryExecutiveTeamMobile() {
  return (
    <div className="grid-rows-10 grid grid-cols-2 gap-2">
      <div className="relative col-span-2">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Ana Couto
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div className="relative row-start-2">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Igor Cardoso
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div className="relative row-start-2">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          James Pereira
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div className="relative">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Erika Pinheiro
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div className="relative row-start-3">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Aline Rubiano
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div className="relative col-span-2">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Danilo Cid
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div className="relative row-start-5">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Fernanda Galluzi
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div className="relative row-start-5">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Napoleon Fujisawa
        </ImageGalleryExecutiveTeamTitle>
      </div>
    </div>
  )
}
