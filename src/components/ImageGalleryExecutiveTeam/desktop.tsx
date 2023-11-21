import LegacySiteURL from '@/common/utils/variables'
import placeholder from '@/images/png/placeholder.png'
import Image from 'next/image'
import { ImageGalleryExecutiveTeamTitle } from './ImageGalleryExecutiveTeamTitle'

export function ImageGalleryExecutiveTeamDesktop() {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-1 text-xs sm:gap-4 sm:text-lg">
      <div
        className="relative col-span-2 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/ana-couto`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/ana-couto.png"
            alt="Ana Couto"
            fill
            quality={100}
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Ana Couto
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative col-start-3 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/igor-cardoso`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/IGOR_FINAL2_CROP_PB-250x300.png`}
            alt="Igor Cardoso"
            fill
            quality={100}
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Igor Cardoso
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative col-start-4 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/james-pereira`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/socios_pb_0000_fotos_site_0001_perfil_erika_banner-1-250x300.jpg`}
            alt="Erika Pinheiro"
            fill
            quality={100}
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Erika Pinheiro
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative row-start-2 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/erika-pinheiro`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/JAMES_CROP_PB-250x300.png`}
            alt="James Pereira"
            fill
            quality={100}
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          James Pereira
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative col-span-2 row-start-2 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/aline-rubiano`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/ALINE_IMG_CROP_PB-250x300.png`}
            alt="Aline Rubiano"
            fill
            quality={100}
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Aline Rubiano
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative col-span-2 row-start-3 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/danilo-cid`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/danilo-cid.png"
            alt="Danilo Cid"
            fill
            quality={100}
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Danilo Cid
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative col-span-2 col-start-3 row-start-3 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/fernanda-galluzi`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={placeholder}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
          />

          <Image
            src={'/images/fernanda-galluzi.png'}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
            quality={100}
            fill
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Fernanda Galluzi
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative row-start-4 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/napoleon-fujisawa`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/NAPO_CROP_PB-250x300.png`}
            alt="Napoleon Fujisawa"
            fill
            style={{ height: '100%', width: '100%' }}
            quality={100}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Napoleon Fujisawa
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative row-start-4 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/rafael-torres`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/RAFAEL_CROP_PB-1-250x300.png`}
            alt="Rafael Torres"
            fill
            style={{ height: '100%', width: '100%' }}
            quality={100}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Rafael Torres
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative col-start-4 row-start-4 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/luis-felippe`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/LUIZ_IMG_CROP_PB-250x300.png`}
            alt="Luiz Felippe Netto"
            fill
            style={{ height: '100%', width: '100%' }}
            quality={100}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Luiz Felippe Netto
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative col-span-2 col-start-2 row-start-5 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/hugo-rafael`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/HUGO_IMG_CROP_PB-250x300.png`}
            alt="placeholder"
            fill
            style={{ height: '100%', width: '100%' }}
            quality={100}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Hugo Rafael
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative col-start-4 row-start-5 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/marcelle-villar`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/MARCELLE_CROP_PB-250x300.png`}
            alt="Marcelle Villar"
            fill
            style={{ height: '100%', width: '100%' }}
            quality={100}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Marcelle Villar
        </ImageGalleryExecutiveTeamTitle>
      </div>
    </div>
  )
}
