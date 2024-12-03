import { reactRouter } from '@react-router/dev/vite';
import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import AutoImport from 'unplugin-auto-import/vite';
// eslint-disable-next-line import-x/no-named-as-default
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

import tailwindcss from 'tailwindcss';

export default ({
  env: { isSsrBuild = false, mode },
  ssrInput = '',
  lintCommand,
  testSetupFiles = ''
}) => {
  const isTest = mode === 'test';
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
      isTest ? react() : reactRouter(),
      tsconfigPaths(),
      svgr({
        typescript: true,
        prettier: false,
        svgo: false,
        titleProp: true,
        ref: true
      }),
      isTest
        ? AutoImport({
            imports: ['vitest'],
            dts: true
          })
        : null
    ],
    test: {
      exclude: ['**/node_modules/**', '**/dist/**', '**/build/**'],
      include: ['**/__tests__/**/*.test.{js,ts,tsx}'],
      setupFiles: testSetupFiles,
      environment: 'jsdom',
      globals: true,
      update: true,
      clearMocks: true,
      typecheck: {
        tsconfig: './tsconfig.json',
        enabled: true
      }
    },
    server: {
      port: 3000,
      open: true
    }
  };
};
