import placeholder from '@/images/png/placeholder.png'
import Image from 'next/image'
import { ImageGalleryExecutiveTeamTitle } from './ImageGalleryExecutiveTeamTitle'
import LegacySiteURL from '@/common/utils/variables'

export function ImageGalleryExecutiveTeamMobile() {
  return (
    <div className="grid h-[200vh] grid-cols-2 grid-rows-[repeat(7,_minmax(0,_1fr))] gap-2">
      <div
        className="relative col-span-2 cursor-pointer"
        onClick={() => window.open(`${LegacySiteURL}/author/ana-couto`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/ana-couto.png"
            alt="Ana Couto"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Ana Couto
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative row-start-2 "
        onClick={() => window.open(`${LegacySiteURL}/author/igor-cardoso`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="https://www.anacouto.com.br/wp-content/uploads/2022/07/IGOR_FINAL2_CROP_PB-250x300.png"
            alt="Igor Cardoso"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Igor Cardoso
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative row-start-2 "
        onClick={() => window.open(`${LegacySiteURL}/author/james-pereira`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="https://www.anacouto.com.br/wp-content/uploads/2022/07/JAMES_CROP_PB-250x300.png"
            alt="James Pereira"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          James Pereira
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative "
        onClick={() => window.open(`${LegacySiteURL}/author/erika-pinheiro`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="https://www.anacouto.com.br/wp-content/uploads/2022/07/socios_pb_0000_fotos_site_0001_perfil_erika_banner-1-250x300.jpg"
            alt="Erika Pinheiro"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Erika Pinheiro
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative row-start-3 "
        onClick={() => window.open(`${LegacySiteURL}/author/aline-rubiano`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="https://www.anacouto.com.br/wp-content/uploads/2022/07/ALINE_IMG_CROP_PB-250x300.png"
            alt="Erika Pinheiro"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Aline Rubiano
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative col-span-2 "
        onClick={() => window.open(`${LegacySiteURL}/author/danilo-cid`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/danilo-cid.png"
            alt="Danilo Cid"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover object-top"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Danilo Cid
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative row-start-5 "
        onClick={() => window.open(`${LegacySiteURL}/author/fernanda-galluzi`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={'/images/quem-somos/fernanda_galluzi.jpeg'}
            alt="placeholder"
            style={{ height: '100%', width: '100%' }}
            className="object-cover"
            fill
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Fernanda Galluzi
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative row-start-5 "
        onClick={() => window.open(`${LegacySiteURL}/author/napoleon-fujisawa`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="https://www.anacouto.com.br/wp-content/uploads/2022/07/NAPO_CROP_PB-250x300.png"
            alt="Napoleon Fujisawa"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover object-top"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Napoleon Fujisawa
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative "
        onClick={() => window.open(`${LegacySiteURL}/author/rafael-torres`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="https://www.anacouto.com.br/wp-content/uploads/2022/07/RAFAEL_CROP_PB-1-250x300.png"
            alt="Napoleon Fujisawa"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover object-top"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Rafael Torres
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative row-start-6 "
        onClick={() => window.open(`${LegacySiteURL}/author/luiz-felippe`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="https://www.anacouto.com.br/wp-content/uploads/2022/07/HUGO_IMG_CROP_PB-250x300.png"
            alt="Napoleon Fujisawa"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover object-top"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Luiz Felippe Netto
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative "
        onClick={() => window.open(`${LegacySiteURL}/author/hugo-rafael`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="https://www.anacouto.com.br/wp-content/uploads/2022/07/HUGO_IMG_CROP_PB-250x300.png"
            alt="Napoleon Fujisawa"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover object-top"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Hugo Rafael
        </ImageGalleryExecutiveTeamTitle>
      </div>

      <div
        className="relative row-start-[7] "
        onClick={() => window.open(`${LegacySiteURL}/author/marcelle-villar`)}
      >
        <div className="relative h-full w-full">
          <Image
            src="https://www.anacouto.com.br/wp-content/uploads/2022/07/MARCELLE_CROP_PB-250x300.png"
            alt="Napoleon Fujisawa"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover object-top"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Marcelle Villar
        </ImageGalleryExecutiveTeamTitle>
      </div>
    </div>
  )
}
