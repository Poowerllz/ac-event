import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea
      className="w-full rounded-md border-[1px] border-gray-600 bg-[transparent] p-4 outline-none placeholder:opacity-30 focus-visible:border-primary focus-visible:outline-offset-0"
      {...props}
    />
  )
}
