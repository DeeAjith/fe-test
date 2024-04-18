import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'fe-dark': '#333333',
        'fe-yellow': '#FAFF00',
        'fe-bg-offwhite': '#F4F4F4',
        'fe-gray': '#898989',
        'fe-gray-1': '#434343',
        'fe-gray-2': '#7F7F7F',
        'fe-gray-3': '#e4e4e4',
        'fe-gray-4': '#A1A1A1',
        'fe-gray-5': '#cccccc',
        'fe-gray-text-1': '#767676',
        'fe-gray-text-2': '#b3b3b3',
        'fe-gray-text-3': '#ababab',
      },
    },
  },
  plugins: [],
}
export default config
