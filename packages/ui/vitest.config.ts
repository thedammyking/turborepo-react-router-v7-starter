import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['vitest'],
      dts: true
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    update: true,
    setupFiles: './src/setupTest.ts',
    dir: '**/__tests__/**/*.test.{js,ts,tsx}',
    clearMocks: true,
    typecheck: {
      tsconfig: './tsconfig.json',
      enabled: true
    }
  }
});
