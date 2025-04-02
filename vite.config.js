import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/clothing": {
  //       target: "http://localhost:5000",
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // }
  plugins: [
    tailwindcss(),
    react()],
})
