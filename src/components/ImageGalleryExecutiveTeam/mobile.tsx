import { cn } from '@/common/utils/cn'
import LegacySiteURL from '@/common/utils/variables'
import Image from 'next/image'
import { ImageGalleryExecutiveTeamTitle } from './ImageGalleryExecutiveTeamTitle'
import { ExecutiveTeam } from './type'

export function ImageGalleryExecutiveTeamMobile() {
  const executiveTeam: ExecutiveTeam[] = [
    {
      name: 'Ana Couto',
      src: '/images/ana-couto.png',
      class: 'col-span-2',
      onClick: 'author/ana-couto'
    },
    {
      name: 'Luiz Felippe Netto',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/LUIZ_IMG_CROP_PB-250x300.png`,
      class: 'col-start-3',
      onClick: 'author/luis-felippe'
    },
    {
      name: 'Aline Rubiano',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/ALINE_IMG_CROP_PB-250x300.png`,
      class: 'col-span-2 col-start-2 row-start-2',
      onClick: 'author/aline-rubiano'
    },
    {
      name: 'James Pereira',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/JAMES_CROP_PB-250x300.png`,
      class: 'col-start-1 row-start-2',
      onClick: 'author/james-pereira'
    },
    {
      name: 'Danilo Cid',
      src: '/images/danilo-cid.png',
      class: 'col-span-2 row-start-3',
      onClick: 'author/danilo-cid'
    },
    {
      name: 'Erika Pinheiro',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/socios_pb_0000_fotos_site_0001_perfil_erika_banner-1-250x300.jpg`,
      class: 'col-start-3 row-start-3',
      onClick: 'author/erika-pinheiro'
    },
    {
      name: 'Fernanda Galluzi',
      src: '/images/fernanda-galluzi.png',
      class: 'col-span-2 col-start-2 row-start-4',
      onClick: 'author/fernanda-galluzi'
    },
    {
      name: 'Napoleon Fujisawa',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/NAPO_CROP_PB-250x300.png`,
      class: 'col-start-1 row-start-4',
      onClick: 'author/napoleon-fujisawa'
    },
    {
      name: 'Hugo Rafael',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/HUGO_IMG_CROP_PB-250x300.png`,
      class: 'col-span-2 row-start-5',
      onClick: 'author/hugo-rafael'
    },
    {
      name: 'Marcelle Villar',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/MARCELLE_CROP_PB-250x300.png`,
      class: 'col-start-3 row-start-5',
      onClick: 'author/marcelle-villar'
    },
    {
      name: 'Rafael Torres',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/RAFAEL_CROP_PB-1-250x300.png`,
      class: 'row-start-6',
      onClick: 'author/rafael-torres'
    },
    {
      name: 'Igor Cardoso',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/IGOR_FINAL2_CROP_PB-250x300.png`,
      class: 'col-start-3 row-start-6',
      onClick: 'author/igor-cardoso'
    }
  ]

  return (
    <div className="grid h-[200vh] grid-cols-3 grid-rows-[repeat(6,_minmax(0,_1fr))] gap-2">
      {executiveTeam.map(executive => {
        return (
          <div
            key={executive.name}
            className={cn(
              executive.class,
              'relative cursor-pointer transition-opacity hover:opacity-80 hover:transition-opacity'
            )}
            onClick={() => window.open(`${LegacySiteURL}/${executive.onClick}`)}
          >
            <div className="relative h-full w-full">
              <Image
                src={executive.src}
                alt={executive.name}
                fill
                style={{ height: '100%', width: '100%' }}
                className="object-cover"
              />
            </div>

            <ImageGalleryExecutiveTeamTitle>
              {executive.name}
            </ImageGalleryExecutiveTeamTitle>
          </div>
        )
      })}

      {/* <div
        className="relative row-start-2 "
        onClick={() => window.open(`${LegacySiteURL}/author/igor-cardoso`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/IGOR_FINAL2_CROP_PB-250x300.png`}
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
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/socios_pb_0000_fotos_site_0001_perfil_erika_banner-1-250x300.jpg`}
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
        className="relative "
        onClick={() => window.open(`${LegacySiteURL}/author/erika-pinheiro`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/JAMES_CROP_PB-250x300.png`}
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
        className="relative row-start-3 "
        onClick={() => window.open(`${LegacySiteURL}/author/aline-rubiano`)}
      >
        <div className="relative h-full w-full">
          <Image
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/ALINE_IMG_CROP_PB-250x300.png`}
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
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/NAPO_CROP_PB-250x300.png`}
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
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/RAFAEL_CROP_PB-1-250x300.png`}
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
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/HUGO_IMG_CROP_PB-250x300.png`}
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
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/HUGO_IMG_CROP_PB-250x300.png`}
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
            src={`${LegacySiteURL}/wp-content/uploads/2022/07/MARCELLE_CROP_PB-250x300.png`}
            alt="Napoleon Fujisawa"
            fill
            style={{ height: '100%', width: '100%' }}
            className="object-cover object-top"
          />
        </div>

        <ImageGalleryExecutiveTeamTitle>
          Marcelle Villar
        </ImageGalleryExecutiveTeamTitle>
      </div> */}
    </div>
  )
}
