import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const resolve = path.resolve;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
      { find: '@styles', replacement: resolve(__dirname, './src/styles') },
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
    ],
  },
});
