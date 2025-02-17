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
        base: 'var(--base)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        neutral: 'var(--neutral)',
        light: 'var(--light)',
        dark: 'var(--dark)',
      },
    },
  },
  plugins: [],
} satisfies Config;
