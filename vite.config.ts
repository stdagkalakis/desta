import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages repo path: https://<user>.github.io/desta/
export default defineConfig({
  plugins: [react()],
  base: '/desta/',
})
