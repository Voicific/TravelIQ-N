import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This makes the environment variables available to the client-side code
    // Cloudflare Pages will substitute `process.env.API_KEY` with the value you set in the dashboard
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env.SERPER_API_KEY': JSON.stringify(process.env.SERPER_API_KEY),
  }
})
