import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      anonymousPro: ['var(--anonymous-pro-font)'],
      atariClassic: ['var(--atari-classic-font)'],
    },
    screens: {
      xs: { max: '575px' },
      sm: { min: '575px', max: '991px' },
      md: { max: '1199px' },
    },
    animation: {
      grid: 'grid 20s linear infinite',
    },
    keyframes: {
      grid: {
        '0%': { transform: 'translateY(-50%)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    extend: {
      colors: {
        white: 'var(--white)',
        'off-white': 'var(--off-white)',
        black: 'var(--black)',
        'black-light': 'var(--black-light)',
        magenta: 'var(--magenta)',
        'magenta-light': 'var(--magenta-light)',
        red: 'var(--red)',
        blue: 'var(--blue)',
        'blue-light': 'var(--blue-light)',
        yellow: 'var(--yellow)',
        orange: 'var(--orange)',
        maroon: 'var(--maroon)',
        green: 'var(--green)',
        gray: 'var(--gray)',
        'gray-light': 'var(--gray-light)',
      },
    },
  },
  plugins: [],
} satisfies Config;
