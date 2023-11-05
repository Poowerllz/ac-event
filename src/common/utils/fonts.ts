import localFont from 'next/font/local'

export const kern = localFont({
  src: [
    {
      path: '../../../public/fonts/standard/kern-standard-thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-thin-italic.woff2',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-medium-italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-light-italic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-bold-italic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-black.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/standard/kern-standard-black-italic.woff2',
      weight: '900',
      style: 'italic'
    }
  ],
  display: 'swap',
  fallback: ['sans-serif'],
  variable: '--font-kern'
})

export const kernCompressed = localFont({
  src: [
    {
      path: '../../../public/fonts/compressed/kern-compressed-thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/compressed/kern-compressed-thin-italic.woff2',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/compressed/kern-compressed-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/compressed/kern-compressed-medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/compressed/kern-compressed-medium-italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/compressed/kern-compressed-light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/compressed/kern-compressed-light-italic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/compressed/kern-compressed-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../public/fonts/compressed/kern-compressed-bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/compressed/kern-compressed-bold-italic.woff2',
      weight: '700',
      style: 'italic'
    }
  ],
  display: 'swap',
  fallback: ['sans-serif'],
  variable: '--font-kern-compressed'
})
