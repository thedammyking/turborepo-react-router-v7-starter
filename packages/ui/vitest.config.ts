import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['vitest'],
      dts: true
    }),
    {
      name: 'load-svg',
      enforce: 'pre',
      transform(_, id) {
        if (id.endsWith('.svg')) {
          return 'export default () => {}';
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    exclude: ['**/node_modules/**', '**/dist/**', '**/build/**'],
    include: ['**/__tests__/**/*.test.{js,ts,tsx}'],
    environment: 'jsdom',
    globals: true,
    update: true,
    setupFiles: './src/setupTest.ts',
    clearMocks: true,
    typecheck: {
      tsconfig: './tsconfig.json',
      enabled: true
    }
  }
});
