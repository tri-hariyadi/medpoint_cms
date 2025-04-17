/* eslint-disable @typescript-eslint/ban-ts-comment */
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// @ts-expect-error

// https://vite.dev/config/
// @ts-ignore
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      // @ts-expect-error
      components: path.resolve(__dirname, './src/components'),
      // @ts-expect-error
      pages: path.resolve(__dirname, './src/pages')
    }
  }
});
