import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/MondiansTAP/', // Adjust if your GitHub Pages path is different
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: path.resolve(__dirname, 'frontend', 'public', 'index.html'),
      external: ['/assets/index-E2MVqSBL.js']  // Externalizing the specific asset
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend', 'src')
    }
  }
});
