import { cn } from '@/common/utils/cn'
import LegacySiteURL from '@/common/utils/variables'
import Image from 'next/image'
import { Fragment } from 'react'
import { ImageGalleryExecutiveTeamTitle } from './ImageGalleryExecutiveTeamTitle'
import { ExecutiveTeam } from './type'

export function ImageGalleryExecutiveTeamDesktop() {
  const executiveTeam: ExecutiveTeam[] = [
    {
      name: 'Ana Couto',
      src: '/images/ana-couto.png',
      class: 'col-span-2 col-start-2',
      onClick: '?author=2'
    },
    {
      name: 'Luiz Felippe Netto',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/LUIZ_IMG_CROP_PB-250x300.png`,
      class: 'col-start-4',
      onClick: '?author=21'
    },
    {
      name: 'Aline Rubiano',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/ALINE_IMG_CROP_PB-250x300.png`,
      class: 'col-span-2 row-start-2',
      onClick: '?author=aline-rubiano'
    },
    {
      name: 'James Pereira',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/JAMES_CROP_PB-250x300.png`,
      class: 'col-start-5 row-start-2',
      onClick: '?author=26'
    },
    {
      name: 'Danilo Cid',
      src: '/images/danilo-cid.png',
      class: 'col-span-2 row-start-3',
      onClick: '?author=40'
    },
    {
      name: 'Rafael Torres',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/RAFAEL_CROP_PB-1-250x300.png`,
      class: 'col-start-3 row-start-3',
      onClick: '?author=7'
    },
    {
      name: 'Erika Pinheiro',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/socios_pb_0000_fotos_site_0001_perfil_erika_banner-1-250x300.jpg`,
      class: 'col-start-4 row-start-3',
      onClick: '?author=4'
    },
    {
      name: 'Napoleon Fujisawa',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/NAPO_CROP_PB-250x300.png`,
      class: 'col-start-5 row-start-3',
      onClick: '?author=17'
    },
    {
      name: 'Fernanda Galluzi',
      src: '/images/fernanda-galluzi.png',
      class: 'col-span-2 row-start-4',
      onClick: '?author=8'
    },
    {
      name: 'Igor Cardoso',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/IGOR_FINAL2_CROP_PB-250x300.png`,
      class: 'col-start-4 row-start-4',
      onClick: '?author=27'
    },
    {
      name: 'Marcelle Villar',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/MARCELLE_CROP_PB-250x300.png`,
      class: 'col-start-5 row-start-4',
      onClick: '?author=304'
    },
    {
      name: 'Hugo Rafael',
      src: `${LegacySiteURL}/wp-content/uploads/2022/07/HUGO_IMG_CROP_PB-250x300.png`,
      class: '',
      onClick: '?author=11'
    }
  ]

  return (
    <Fragment>
      <div className="grid h-[300vh] grid-cols-5 grid-rows-4 gap-1 text-xs sm:gap-4 sm:text-lg">
        {executiveTeam.map((executive, index, array) => {
          const isLastItem = index === array.length - 1

          if (isLastItem) return

          return (
            <div
              key={executive.name}
              className={cn(
                executive.class,
                'relative cursor-pointer transition-opacity hover:opacity-80 hover:transition-opacity'
              )}
              onClick={() =>
                window.open(`${LegacySiteURL}/${executive.onClick}`)
              }
              onKeyDown={() =>
                window.open(`${LegacySiteURL}/${executive.onClick}`)
              }
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

      <div className="mt-[1rem] flex h-[50vh] items-center justify-center">
        <div
          key={executiveTeam[11].name}
          className={cn(
            executiveTeam[11].class,
            'relative h-full w-[745.99px] cursor-pointer transition-opacity hover:opacity-80 hover:transition-opacity'
          )}
          onClick={() =>
            window.open(`${LegacySiteURL}/${executiveTeam[11].onClick}`)
          }
          onKeyDown={() =>
            window.open(`${LegacySiteURL}/${executiveTeam[11].onClick}`)
          }
        >
          <div className="relative h-full w-full">
            <Image
              src={executiveTeam[11].src}
              alt={executiveTeam[11].name}
              fill
              quality={100}
              style={{ height: '100%', width: '100%' }}
              className="object-cover"
            />
          </div>

          <ImageGalleryExecutiveTeamTitle>
            {executiveTeam[11].name}
          </ImageGalleryExecutiveTeamTitle>
        </div>
      </div>
    </Fragment>
  )
}
