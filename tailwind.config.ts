import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        cormorant: ['Cormorant Infant', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        tangerine: ['Tangerine', 'serif'], //italic
        corinthia: ['Corinthia', 'cursive'], //italic
        lovelight: ['Love Light', 'cursive'], //italic
        greatVibes: ['Great Vibes', 'cursive'], //italic
      },
    },
  },
  plugins: [],
} satisfies Config
