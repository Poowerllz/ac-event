export type BackgroundHeaderProps = {
  mobile?: string
  desktop?: string
  showText?: boolean
  invert?: boolean
  hasBackgroundColor?: boolean
  color?: string
}

export type BackgroundsHeaderProps = Record<string, BackgroundHeaderProps>
