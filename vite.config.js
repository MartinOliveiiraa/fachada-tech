import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'publico',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash]-production.js',
        chunkFileNames: 'assets/[name]-[hash]-production.js',
        assetFileNames: 'assets/[name]-[hash]-production[extname]',
      },
    },
  },
})
