/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // ... Specify options here.
    globals: true,
    setupFiles: './vitest.setup.ts',
    environment: 'jsdom',
  },
})