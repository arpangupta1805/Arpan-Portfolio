import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Arpan-Portfolio',
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore certain warnings
        if (warning.code === 'DYNAMIC_IMPORT_VARIABLES') {
          return
        }
        warn(warning)
      }
    }
  }
})
