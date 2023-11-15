import { TypographiesTypes } from './type'

export const typographies: TypographiesTypes = {
  h1: {
    className:
      ' mt-12 h-full w-auto font-kernCompressed text-5xl font-bold sm:mt-0 sm:text-6xl lg:text-7xl xl:text-8xl',
    animationInput: ' animate-text-reveal opacity-100',
    animationOutput: ' opacity-0'
  },
  h2: {
    className:
      ' w-auto font-kernCompressed text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl',
    animationInput: ' animate-text-reveal opacity-100',
    animationOutput: ' opacity-0'
  }
}
