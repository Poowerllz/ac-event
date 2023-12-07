import { MouseEventHandler } from 'react'

type TArrowIcon = {
  className?: string
  onclick?: MouseEventHandler<HTMLDivElement>
  invert?: boolean
}

export function ArrowIcon({ className, onclick, invert }: TArrowIcon) {
  return (
    <div onClick={onclick}>
      <svg
        id="Arrow"
        data-name="Arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.6 58.24"
        className={className}
        {...(invert && { style: { filter: 'invert(100%)' } })}
      >
        <polygon
          className="cls-1"
          points="13.3 0 0 13.3 .88 14.19 12.68 2.39 12.68 58.24 13.93 58.24 13.93 2.39 25.72 14.19 26.6 13.3 13.3 0"
        />
      </svg>
    </div>
  )
}
