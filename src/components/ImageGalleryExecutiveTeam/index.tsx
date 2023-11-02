import placeholder from '@/images/png/placeholder.png'
import Image from 'next/image'
import { ImageGalleryExecutiveTeamTitle } from './ImageGalleryExecutiveTeamTitle'

export function ImageGalleryExecutiveTeam() {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 text-xs sm:text-lg">
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

      <div className="relative col-start-3">
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

      <div className="relative col-start-4">
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

      <div className="relative row-start-2">
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

      <div className="relative col-span-2 row-start-2">
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

      <div className="relative col-span-2 row-start-3">
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

      <div className="relative col-span-2 col-start-3 row-start-3">
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

      <div className="relative row-start-4">
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

      <div className="relative row-start-4">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Rafael Torres
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div className="relative col-start-4 row-start-4">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Luiz Felippe Netto
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div className="relative col-span-2 col-start-2 row-start-5">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Hugo Rafael
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div className="relative col-start-4 row-start-5">
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Marcelle Villar
        </ImageGalleryExecutiveTeamTitle>
      </div>
    </div>
  )
}
