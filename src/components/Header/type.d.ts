export type VideoHeaderProps = {
  hasBackgroundColor?: boolean
  color?: string
  src: string
}

export type VideosHeaderProps = Record<string, VideoHeaderProps>
