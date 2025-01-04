import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8082', // Backend Spring Boot
        changeOrigin: true, // Pour gérer l'origine de la requête
        rewrite: (path) => path.replace(/^\/api/, ''), // Si nécessaire, réécrire le chemin de l'URL
      },
    },
  },
});
