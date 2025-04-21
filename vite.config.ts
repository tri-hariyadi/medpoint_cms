import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-nodejs-modules
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      utils: path.resolve(__dirname, './src/utils'),
      assets: path.resolve(__dirname, './src/assets'),
      store: path.resolve(__dirname, './src/store')
    }
  }
});
