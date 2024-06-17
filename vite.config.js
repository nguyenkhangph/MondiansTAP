// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/MondiansTAP/', // Adjust if your GitHub Pages path is different
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'frontend', 'public', 'index.html')  // Correct path using path.resolve
    }
  }
});