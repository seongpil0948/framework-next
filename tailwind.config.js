import { nextui } from '@nextui-org/theme'
import { cmColors, cmSemanticColors } from './config/colors'
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      width: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '6xl': '72rem',
      },
      colors: cmColors,
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: defaultTheme.fontFamily.serif,
        mono: defaultTheme.fontFamily.mono,
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        // disabledOpacity: "0.3", // opacity-[0.3]
        // radius: {
        //   small: "8px", // rounded-small
        //   medium: "12px", // rounded-medium
        //   large: "24px", // rounded-large
        // },
        // borderWidth: {
        //   small: "12px", // border-small
        //   medium: "24px", // border-medium
        //   large: "48px", // border-large
        // },
      },
      addCommonColors: false,
      themes: {
        light: {
          colors: cmSemanticColors.light,
        },
        dark: {
          colors: cmSemanticColors.dark,
        },
      },
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        // Flex Pattern
        '.flex-column': {
          display: 'flex',
          flexDirection: 'column',
        },
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-center-col': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        '.flex-center-ver': {
          display: 'flex',
          alignItems: 'center',
        },
        '.flex-center-hor': {
          display: 'flex',
          justifyContent: 'center',
        },
        '.gradient': {
          background:
            'linear-gradient(60deg,#61dafb 0%,#d6cbf6 30%,#f2056f 70%)',
        },
      })
    }),
  ],
}
