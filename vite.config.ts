import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude lucide-react from dependency optimization
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
    sourcemap: true, // Generate source maps for better debugging
    minify: 'terser', // Minify the output using Terser
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true, // Remove debugger statements in production
      },
    },
  },
  server: {
    port: 3000, // Set the development server port
    open: true, // Automatically open the app in the browser
    cors: true, // Enable CORS for development
  },
  preview: {
    port: 3001, // Set the preview server port
    open: true, // Automatically open the app in the browser
  },
});