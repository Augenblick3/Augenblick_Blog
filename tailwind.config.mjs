/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
        serif: ['Lora', 'Noto Serif SC', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        surface: {
          light: '#fafafa',
          dark: '#0f0f0f',
        },
        ink: {
          light: '#1a1a1a',
          dark: '#e8e8e8',
        },
        muted: {
          light: '#6b7280',
          dark: '#9ca3af',
        },
        border: {
          light: '#e5e7eb',
          dark: '#262626',
        },
        accent: '#6366f1',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.light'),
            '--tw-prose-headings': theme('colors.ink.light'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-code': theme('colors.ink.light'),
            maxWidth: '72ch',
            lineHeight: '1.8',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.ink.dark'),
            '--tw-prose-headings': theme('colors.ink.dark'),
            '--tw-prose-links': '#818cf8',
            '--tw-prose-code': theme('colors.ink.dark'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
