import { cn } from '@/common/utils/cn'
import logoAnaCouto from '@/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '../Menu'
import { MenuLogoProps } from './type'

export function MenuLogo({ bgColor }: MenuLogoProps) {
  return (
    <nav className={cn('flex w-full items-center p-16', bgColor)}>
      <Menu invertColor={true} />

      <Link href={'/'} scroll={false} className="invert">
        <Image
          src={logoAnaCouto}
          alt={'Imagem da logo'}
          className="z-10 cursor-pointer"
          height={100}
          width={100}
        />
      </Link>
    </nav>
  )
}
