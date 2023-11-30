import { AticlesHome } from '@/components/ArticlesGallery/AticlesHome'
import { CasesGalleryContainer } from '@/components/CasesGallery/CasesGalleryContainer'
import Carousel from '@/components/Swiper'
import { ArrowMobile } from '@/components/arrowMobile'
import { Typography } from '@/components/ui/Typography'
import ArrowTop from '@/images/svg/arrowtop.svg'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Message } from '../../components/Message'

export default function Home() {
  const t = useTranslations('Home')
  return (
    <main
      className="block w-full flex-col items-center justify-between overflow-hidden font-kern font-bold"
      id={'twoSection'}
    >
      <div className="flex h-auto w-full items-start justify-between px-6 py-24 sm:px-16">
        <Typography
          as="h1"
          className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl"
        >
          {t('sectionWhoWeAre.text.lineOne')}
          <br />
          {t('sectionWhoWeAre.text.lineTwo')}
          <br />
          {t('sectionWhoWeAre.text.lineThree')}
          <br />
          {t('sectionWhoWeAre.text.lineFour')}
        </Typography>

        <div className="relative flex min-h-[50%] w-1/6 flex-col items-end justify-between pb-20">
          <div className="flex h-full  transform cursor-pointer items-start justify-end">
            <ArrowMobile name={ArrowTop} section={'header'} />
          </div>
          <Link
            href={'/quem-somos'}
            style={{ paddingTop: '400px', justifyContent: 'end' }}
          >
            <div className=" ml-auto flex w-auto -rotate-90 transform cursor-pointer items-center justify-end  pt-28 md:pr-11 md:pt-36">
              <AiOutlinePlusCircle size={20} />
              <p className="ml-1 w-24 text-sm">{t('sectionWhoWeAre.button')}</p>
            </div>
          </Link>
        </div>
      </div>

      <section className="flex w-full flex-col gap-1 px-1 py-10 sm:gap-4 sm:px-4">
        <CasesGalleryContainer isHomePage={true} />
        <AticlesHome />
      </section>

      <Message
        title={t('sectionWhatWeDo.text')}
        subTitle={t('sectionWhatWeDo.button')}
        arrow={false}
        pathSubtitle="/o-que-fazemos"
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
