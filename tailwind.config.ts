import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'background': '#1C232B',
      'white': '#EDF0F3',
      'blue-light': '#47A4F9',
      'blue': '#395A80',
      'blue-dark': '#0A294C',
      'gray-light': '#62686F',
      'gray': '#454545',
      'gray-dark': '#1F2832'
    }
  },
  plugins: [],
}
export default config
