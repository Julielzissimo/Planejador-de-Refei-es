import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente (VITE_API_KEY ou API_KEY) para uso no Node
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    // Define a base como relativa ('./') para que os assets funcionem no GitHub Pages (subdiretório)
    base: './', 
    define: {
      // Importante: Substitui 'process.env.API_KEY' pelo valor real da string durante o build.
      // Isso previne o erro "process is not defined" no navegador.
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY || '')
    },
    build: {
      outDir: 'dist',
    }
  };
});