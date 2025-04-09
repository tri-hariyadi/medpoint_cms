/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-expect-error
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ts-expect-error
      components: path.resolve(__dirname, './src/components'),
      // @ts-expect-error
      pages: path.resolve(__dirname, './src/pages')
    }
  }
});
