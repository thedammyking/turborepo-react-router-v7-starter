import sharedConfig from '@repo/vite-config';
import path from 'path';
import { defineConfig, mergeConfig } from 'vite';

export default defineConfig(configEnv =>
  mergeConfig(
    sharedConfig({
      env: configEnv,
      lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      ssrInput: './server/app.ts',
      testSetupFiles: './src/setupTest.ts'
    }),
    defineConfig({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      }
    }),
    false
  )
);
