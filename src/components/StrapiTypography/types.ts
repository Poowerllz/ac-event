export interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode
  dataKey: string
  boxClass?: string
  as?: any
  animation?: boolean
}
