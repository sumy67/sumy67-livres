import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'mpa',
  server: { host: true },
  build: { rollupOptions: { input: '/index.html' } },
});
