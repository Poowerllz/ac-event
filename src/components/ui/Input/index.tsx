import { cn } from '@/common/utils/cn'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      name={props.name}
      type="text"
      placeholder={props.placeholder}
      className={cn(
        'w-full border-b-[1px] border-gray-600 bg-[transparent] px-0 py-1 outline-none placeholder:opacity-30 focus-visible:border-b-primary focus-visible:outline-offset-0',
        props.className
      )}
    />
  )
}
