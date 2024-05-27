import type { Config } from 'tailwindcss'
import colors, { black, slate } from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: '#1882FF',
      block: '#5A6573',
      heading: '#1A2B3D',
      slate: colors.slate,
      white: colors.white,
      black: colors.black
    }
  },
  plugins: []
}
export default config
