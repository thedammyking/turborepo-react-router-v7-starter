import { reactRouter } from '@react-router/dev/vite';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { defineConfig } from 'vite';
// eslint-disable-next-line import-x/no-named-as-default
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

import tailwindcss from 'tailwindcss';

export default defineConfig(({ isSsrBuild, mode }) => {
  const isProduction = mode === 'production';
  return {
    build: {
      cssMinify: isProduction,
      minify: isProduction ? 'terser' : false,
      rollupOptions: {
        input: isSsrBuild ? './server/app.ts' : undefined,
        output: {
          manualChunks: {}
        },
        treeshake: isProduction
      }
    },

    define: {
      global: 'window'
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    plugins: [
      checker({
        typescript: true,
        eslint: {
          useFlatConfig: true,
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
        },
        overlay: {
          initialIsOpen: false
        }
      }),
      reactRouter(),
      tsconfigPaths(),
      svgr({
        typescript: true,
        prettier: false,
        svgo: false,
        titleProp: true,
        ref: true
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      port: 3000,
      open: true
    }
  };
});
