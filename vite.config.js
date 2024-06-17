// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/MondiansTAP/', // Adjust if your GitHub Pages path is different
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'frontend', 'public', 'index.html')  // Correct path using path.resolve
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend', 'src')
    }
  }
});
