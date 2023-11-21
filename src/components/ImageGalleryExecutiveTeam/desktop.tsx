import { cn } from '@/common/utils/cn'
import LegacySiteURL from '@/common/utils/variables'
import Image from 'next/image'
import { ImageGalleryExecutiveTeamTitle } from './ImageGalleryExecutiveTeamTitle'
import { ExecutiveTeam } from './type'

export function ImageGalleryExecutiveTeamDesktop() {
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
      class: 'col-start-4 row-start-2',
      onClick: 'author/james-pereira'
    },
    {
      name: 'Danilo Cid',
      src: '/images/danilo-cid.png',
      class: 'col-span-2 col-start-3 row-start-3',
      onClick: 'author/danilo-cid'
    },
    {
      name: 'Erika Pinheiro',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/socios_pb_0000_fotos_site_0001_perfil_erika_banner-1-250x300.jpg`,
      class: 'col-start-1 row-start-3',
      onClick: 'author/erika-pinheiro'
    },
    {
      name: 'Fernanda Galluzi',
      src: '/images/fernanda-galluzi.png',
      class: 'col-span-2 row-start-4',
      onClick: 'author/fernanda-galluzi'
    },
    {
      name: 'Napoleon Fujisawa',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/NAPO_CROP_PB-250x300.png`,
      class: 'col-start-3 row-start-4',
      onClick: 'author/napoleon-fujisawa'
    },
    {
      name: 'Hugo Rafael',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/HUGO_IMG_CROP_PB-250x300.png`,
      class: 'col-span-2 col-start-2 row-start-5',
      onClick: 'author/hugo-rafael'
    },
    {
      name: 'Marcelle Villar',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/MARCELLE_CROP_PB-250x300.png`,
      class: 'col-start-4 row-start-5',
      onClick: 'author/marcelle-villar'
    },
    {
      name: 'Rafael Torres',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/RAFAEL_CROP_PB-1-250x300.png`,
      class: 'col-start-3 row-start-6',
      onClick: 'author/rafael-torres'
    },
    {
      name: 'Igor Cardoso',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/IGOR_FINAL2_CROP_PB-250x300.png`,
      class: 'col-start-1 row-start-6',
      onClick: 'author/igor-cardoso'
    }
  ]

  return (
    <div className="grid h-[300vh] grid-cols-4 grid-rows-6 gap-1 text-xs sm:gap-4 sm:text-lg">
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
                quality={100}
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
    </div>
  )
}
