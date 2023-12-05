import { ReactNode } from 'react'

export function ImageGalleryWhatWeDoSubtitle({
  children
}: {
  children: ReactNode
}) {
  return (
    <p className="flex justify-end text-sm font-light leading-none sm:text-lg">
      {children}
    </p>
  )
}
