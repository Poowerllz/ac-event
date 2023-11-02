import { Button } from '@/components/Client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import logo from '../../../public/images/svg/logo.svg'

export default function Home() {
  const t = useTranslations('Home')
  return (
    <main className="bg-primary text-secondary-200 flex w-full flex-col items-center justify-between p-24 font-bold">
      <h1>{t('title')}</h1>
      <div className="flex items-center justify-between px-24 ">
        <div className="relative h-auto w-60">
          <Image
            src={logo}
            alt={'Imagem da logo'}
            style={{ height: 'auto', width: '100%' }}
          />
        </div>
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
