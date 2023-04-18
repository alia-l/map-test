import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    proxy: {
      '/Map': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/Map/, '')
      },
      '/staticMGDataMapE': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
      '/Data/sample': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    }
  },
})
