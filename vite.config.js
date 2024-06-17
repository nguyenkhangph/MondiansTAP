// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/MondiansTAP/', 
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'C:/Users/pnkha/MondiansTAP/frontend/public/index.html'  
    }
  }
});
