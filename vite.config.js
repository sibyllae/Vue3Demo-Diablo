import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Vue3Demo-Diablo/',
  plugins: [vue()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
  },
})
