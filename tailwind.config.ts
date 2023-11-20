import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
	  colors: {
		'dark-element': 'hsl(209, 23%, 22%)',
		'dark-forbg': 'hsl(207, 26%, 17%)',
		'dark-text': 'hsl(200, 15%, 8%)',
		'dark-grey': 'hsl(0, 0%, 52%)',
		'light-forbg': 'hsl(0, 0%, 98%)',
		'light-element': 'hsl(0, 0%, 100%)'
	  }
    },
  },
  plugins: [],
}
export default config
