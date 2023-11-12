import { ReactNode } from 'react'

export function ImageGalleryWhatWeDoSubtitle({
  children
}: {
  children: ReactNode
}) {
  return (
    <p className="text-sm font-light leading-none sm:text-lg">{children}</p>
  )
}
