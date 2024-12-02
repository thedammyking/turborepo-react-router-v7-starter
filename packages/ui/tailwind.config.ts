import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Pick<Config, 'content' | 'presets' | 'plugins'> = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
  plugins: [tailwindcssAnimate]
};

export default config;
