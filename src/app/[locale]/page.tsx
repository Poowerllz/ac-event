import { AticlesHome } from '@/components/ArticlesGallery/AticlesHome'
import { CasesGalleryContainer } from '@/components/CasesGallery/CasesGalleryContainer'
import Carousel from '@/components/Swiper'
import { Message } from '../../components/Message'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')
  return (
    <main className="block w-full flex-col items-center justify-between overflow-hidden font-kern  font-bold">
      <Message
        title={t('sectionWhoWeAre.text')}
        subTitle={t('sectionWhoWeAre.button')}
        pathSubtitle="/quem-somos"
        arrow={true}
      />

      <section className="flex w-full flex-col gap-1 px-1 py-10 sm:mb-40 sm:gap-4 sm:px-4">
        <CasesGalleryContainer isHomePage={true} />
        <AticlesHome />
      </section>

      <Message
        title={t('sectionWhatWeDo.text')}
        subTitle={t('sectionWhatWeDo.button')}
        arrow={false}
        pathSubtitle="/quem-somos"
      />
      <Carousel
        images={[
          'havaianas',
          'ifood',
          'raizen',
          'vl',
          'bs2',
          'havaianas',
          'ifood',
          'raizen',
          'vl',
          'bs2'
        ]}
      />
      <Carousel
        images={[
          'nextel',
          'parperfeito',
          'grupo',
          'uol',
          'tele',
          'nextel',
          'parperfeito',
          'grupo',
          'uol',
          'tele'
        ]}
      />
      <div className="bp-10 h-10" />
    </main>
  )
}
