import { ReactNode } from 'react'

export function ImageGalleryWhatWeDoSubtitle({
  children
}: {
  children: ReactNode
}) {
  return <p className="text-sm font-bold leading-none sm:text-lg">{children}</p>
}
