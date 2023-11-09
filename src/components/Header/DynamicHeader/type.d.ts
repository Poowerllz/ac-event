export type BackgroundHeaderProps = {
  mobile: string
  desktop: string
  showText?: boolean
  invert?: boolean
}

export type BackgroundsHeaderProps = Record<string, BackgroundHeaderProps>
