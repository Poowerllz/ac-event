'use client'

import Image from 'next/image'
import { ImageGalleryWhatWeDoSubtitle } from './ImageGalleryWhatWeDoSubtitle'
import { ImageGalleryWhatWeDoTitle } from './ImageGalleryWhatWeDoTitle'
import { ImageGalleryWhatWeDoProps } from './type'

export function ImageGalleryWhatWeDoDesktop({
  images,
  text
}: ImageGalleryWhatWeDoProps) {
  return (
    <div className="grid h-full w-full grid-cols-4 content-stretch items-stretch justify-center gap-2 md:gap-4">
      <div className="flex flex-col justify-between gap-5">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[0]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mb-5"
            priority={false}
            loading="lazy"
          />

          <ImageGalleryWhatWeDoTitle>COCRIAÇÃO</ImageGalleryWhatWeDoTitle>
        </div>

        <ImageGalleryWhatWeDoSubtitle>
          Através de parceria <br /> estratégica entre cliente <br /> e agência,
          chegamos às perguntas <br />
          certas para desenhar cada solução.
        </ImageGalleryWhatWeDoSubtitle>
      </div>

      <div className="flex flex-col gap-5 self-end">
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-4">
          <ImageGalleryWhatWeDoTitle>AGILIDADE</ImageGalleryWhatWeDoTitle>

          <ImageGalleryWhatWeDoSubtitle>
            Com a aplicação de metodologias <br /> ágeis e reuniões de sprints.
          </ImageGalleryWhatWeDoSubtitle>
        </div>

        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[1]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            priority={false}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-12 self-end">
        <ImageGalleryWhatWeDoSubtitle>
          Em encontros com diferentes <br />
          tons e objetivos, como workshops, <br />
          senergizers e provokes.
        </ImageGalleryWhatWeDoSubtitle>

        <div className="relative h-auto w-full">
          <ImageGalleryWhatWeDoTitle>SOLUÇÃO</ImageGalleryWhatWeDoTitle>

          <Image
            property="true"
            src={images[2]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mt-5"
            priority={false}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-5 ">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[3]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mb-5"
            priority={false}
            loading="lazy"
          />

          <ImageGalleryWhatWeDoSubtitle>
            Com reuniões de sprints e <br />
            ferramentas de Design Thinking.
          </ImageGalleryWhatWeDoSubtitle>
        </div>

        <ImageGalleryWhatWeDoTitle>
          APRENDIZADO GERA AUTONOMIA{' '}
        </ImageGalleryWhatWeDoTitle>
      </div>
    </div>
  )
}
