const withMT = require('@material-tailwind/react/utils/withMT')
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      success: {
        100: '#d4edda',
        200: '#28a745',
        400: '#218838'
      },
      error: {
        100: '#f8d7da',
        200: '#dc3545',
        400: '#a71d2a'
      },
      warning: {
        100: '#fff3cd',
        200: '#ffc107',
        400: '#d39e00'
      },
      gray: {
        100: '#FBFBFB',
        200: '#EAEAEA',
        300: '#D3D3D3',
        400: '#BDBDBD',
        600: '#707070'
      }
    },
    extend: {
      fontFamily: {
        kern: ['var(--font-kern)']
      }
    }
  },
  plugins: []
}
export default withMT(config)
