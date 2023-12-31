import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      off_white: '#E2E8D3',
      primary: '#FF4917',
      secondary: {
        100: '#E7E8DE',
        200: '#E2E8D3'
      },
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
      animation: {
        'text-reveal': 'text-reveal 0.95s linear both'
      },
      keyframes: {
        'text-reveal': {
          '0%': { transform: 'translateY(92%)', opacity: '1' },
          '50%': { transform: 'translateY(30%)', opacity: '1' },
          '55%': { transform: 'translateY(0%)', opacity: '1' }
        }
      },
      fontFamily: {
        kern: ['var(--font-kern)'],
        kernCompressed: ['var(--font-kern-compressed)']
      }
    }
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.hidden-md': { display: 'none' }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
export default config
