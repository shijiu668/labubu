/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-pink': '#FF6B9D',
        'primary-coral': '#FF8E9B',
        'primary-peach': '#FFB4B4',
        'accent-purple': '#E4B1F0',
        'soft-yellow': '#FFF4E6',
        'warm-white': '#FEFEFE',
      }
    },
  },
  plugins: [],
}