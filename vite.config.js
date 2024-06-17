// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/MondiansTAP/', // Adjust if your GitHub Pages path is different
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Explicitly specify an assets directory
    rollupOptions: {
      input: path.resolve(__dirname, 'frontend', 'public', 'index.html') // Ensure correct HTML input
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend', 'src'),
    }
  }
});
