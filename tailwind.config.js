import { nextui } from '@nextui-org/theme'
const plugin = require("tailwindcss/plugin");

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
        '4xl': '56rem',
        '6xl': '72rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui(),
    plugin(function ({ addComponents }) {
      addComponents({
        // Flex Pattern
        '.flex-column': {
          display: 'flex',
          flexDirection: 'column'
        },
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.flex-center-column': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        },
        '.flex-center-ver': {
          display: 'flex',
          alignItems: 'center'
        },
        '.flex-center-hor': {
          display: 'flex',
          justifyContent: 'center'
        },
      })
    })
  ],
}
