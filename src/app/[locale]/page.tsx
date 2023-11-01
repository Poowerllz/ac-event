import { Button } from '@/components/Client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('Home')
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24  font-kern font-bold"
      style={{ background: '#FF4917', width: '1920px', height: '1080px' }}
    >
      <h1>{t('title')}</h1>
      <div className="flex items-center justify-between px-24 ">
        <Image
          src={'/images/logo.png'}
          alt={'Imagem da logo'}
          width={100}
          height={100}
        />
        <div className="lg:hidden">
          <i className="gr GrMenu" />
          <Button>Buttão</Button>
          {/* <motion.button
            variants={buttonVariants}
            initial="closed"
            animate={menuOpen ? 'open' : 'closed'}
            onClick={toggleMenu}
            color={'#000'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-heart" />
          </motion.button> */}
          {/* <MenuButton
            isOpen={menuOpen}
            // onClick={() => setMenuOpen(!menuOpen)}
            onClick={toggleMenu}
            // style={}
            color="#000"
          /> */}
        </div>
      </div>
    </main>
  )
}
