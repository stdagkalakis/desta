import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the custom domain root (see public/CNAME).
export default defineConfig({
  plugins: [react()],
  base: '/',
})
