import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  presets: [sharedConfig],
  content: [
    './src/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      }
    }
  }
} satisfies Config;
