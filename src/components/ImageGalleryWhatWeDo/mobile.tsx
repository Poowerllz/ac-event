'use client'

import Image from 'next/image'
import { ImageGalleryWhatWeDoSubtitle } from './ImageGalleryWhatWeDoSubtitle'
import { ImageGalleryWhatWeDoTitle } from './ImageGalleryWhatWeDoTitle'
import { ImageGalleryWhatWeDoProps } from './type'

export function ImageGalleryWhatWeDoMobile({
  images,
  text
}: ImageGalleryWhatWeDoProps) {
  return (
    <div className="flex h-full w-full flex-col content-stretch items-stretch justify-center gap-2 md:gap-4">
      <div className="mt-5 flex flex-col justify-between gap-5">
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
        </div>

        <div className="flex justify-between">
          <ImageGalleryWhatWeDoTitle>Cocriação</ImageGalleryWhatWeDoTitle>

          <ImageGalleryWhatWeDoSubtitle>
            Através da parceria <br /> estratégica entre cliente
            <br /> e agência, chegamos <br /> às perguntas certas <br />
            para desenhar cada solução.
          </ImageGalleryWhatWeDoSubtitle>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-5">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[1]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mb-5"
            priority={false}
            loading="lazy"
          />
        </div>

        <div className="flex justify-between">
          <ImageGalleryWhatWeDoTitle>Agilidade</ImageGalleryWhatWeDoTitle>

          <ImageGalleryWhatWeDoSubtitle>
            Com a aplicação de metodologias
            <br /> ágeis e reuniões de sprints.
          </ImageGalleryWhatWeDoSubtitle>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-5">
        <div className="relative h-auto w-full">
          <Image
            property="true"
            src={images[2]}
            alt="Propósito engajador e de impacto"
            style={{ height: 'auto', width: '100%' }}
            className="mb-5"
            priority={false}
            loading="lazy"
          />
        </div>

        <div className="flex justify-between">
          <ImageGalleryWhatWeDoTitle>Solução</ImageGalleryWhatWeDoTitle>

          <ImageGalleryWhatWeDoSubtitle>
            Em encontros com diferentes <br /> tons e objetivos, como <br />
            workshops, energizers e provokes.
          </ImageGalleryWhatWeDoSubtitle>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-5">
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
        </div>

        <div className="flex justify-between">
          <ImageGalleryWhatWeDoTitle>
            Aprendizado gera autonomia
          </ImageGalleryWhatWeDoTitle>

          <ImageGalleryWhatWeDoSubtitle>
            Com reuniões de sprints e <br /> ferramentas de Design Thinking.
          </ImageGalleryWhatWeDoSubtitle>
        </div>
      </div>
    </div>
  )
}
