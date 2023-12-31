import { ImageGalleryExecutiveTeamTitleProps } from './type'

export function ImageGalleryExecutiveTeamTitle({
  children
}: ImageGalleryExecutiveTeamTitleProps) {
  return (
    <span className="absolute bottom-2 left-2 text-xs font-bold text-white sm:bottom-5 sm:left-5 md:text-2xl">
      {children}
    </span>
  )
}
