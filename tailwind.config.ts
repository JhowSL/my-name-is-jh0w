import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    extend: {
      scale: {
        '400': '4.00',
        '300': '3.00',
      },
      colors: {
        secondary: '#F07A0E', // Botões principais, links, etc.
      },
    },
  },
} satisfies Config

export default config
