// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Force automatic JSX + ensure plugin runs
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react'
  }
})
