import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: { max: '575px' },
      sm: { min: '575px', max: '991px' },
      md: { max: '1199px' },
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
