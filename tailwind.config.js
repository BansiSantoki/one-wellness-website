export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#254F43', // slightly lighter green for better contrast
          deep: '#3B6B56',    // match footer soft color so dark-green areas use footer color
          soft: '#3B6B56',    // lighter soft tone
        },
        sage: {
          DEFAULT: '#8FA08B',
          light: '#C3CDBD',
          dark: '#6B7D67',
        },
        ivory: {
          DEFAULT: '#FBF8F1',
          warm: '#F5EFE3',
        },
        sand: {
          DEFAULT: '#E4D9C5',
          dark: '#CFC0A6',
        },
        earth: {
          DEFAULT: '#6B5644',
          light: '#8C7561',
        },
        brass: {
          DEFAULT: '#B08D4F',
          light: '#C9A96A',
          dark: '#8C6E3A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(28,59,46,0.04), 0 12px 40px -12px rgba(28,59,46,0.14)',
        lift: '0 2px 4px rgba(28,59,46,0.05), 0 24px 60px -18px rgba(28,59,46,0.22)',
      },
    },
  },
}
