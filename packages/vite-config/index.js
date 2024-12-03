/// <reference types="vitest/config" />
import { reactRouter } from '@react-router/dev/vite';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
// eslint-disable-next-line import-x/no-named-as-default
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

import tailwindcss from 'tailwindcss';

export default ({
  env: { isSsrBuild = false, mode },
  ssrInput,
  lintCommand,
  testSetupFiles = ''
}) => {
  const isProduction = mode === 'production';
  return {
    build: {
      cssMinify: isProduction,
      minify: isProduction ? 'terser' : false,
      rollupOptions: {
        input: isSsrBuild && ssrInput ? ssrInput : undefined,
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
          lintCommand
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
    server: {
      port: 3000,
      open: true
    },
    test: testSetupFiles
      ? { setupFiles: testSetupFiles, environment: 'jsdom', globals: true }
      : undefined
  };
};
