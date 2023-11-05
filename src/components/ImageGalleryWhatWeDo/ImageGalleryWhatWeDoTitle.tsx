import { ReactNode } from 'react'

export function ImageGalleryWhatWeDoTitle({
  children
}: {
  children: ReactNode
}) {
  return (
    <span className="font-kernCompressed text-3xl font-bold leading-none sm:text-5xl">
      {children}
    </span>
  )
}
