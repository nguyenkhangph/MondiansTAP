// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/MondiansTAP/', 
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'frontend\public\index.html'  
    }
  }
});
