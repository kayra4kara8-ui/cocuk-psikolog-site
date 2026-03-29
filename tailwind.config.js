/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e6ede6',
          200: '#cddacd',
          300: '#a8bfa8',
          400: '#7d9e7d',
          500: '#5c7d5c',
          600: '#486448',
          700: '#3a503a',
          800: '#2f4030',
          900: '#263526',
        },
        warm: {
          50: '#faf8f5',
          100: '#f3ede4',
          200: '#e5d9c8',
          300: '#d2bfa3',
          400: '#bb9d79',
          500: '#a8835a',
          600: '#8f6b47',
          700: '#74553a',
          800: '#5f4531',
          900: '#4e392b',
        },
        sky: {
          50: '#f0f7ff',
          100: '#ddeeff',
          200: '#b3d9ff',
          300: '#7bbeff',
          400: '#3d9eff',
          500: '#1a7fe0',
          600: '#1262bb',
          700: '#104e97',
          800: '#12417c',
          900: '#143767',
        }
      }
    },
  },
  plugins: [],
}
