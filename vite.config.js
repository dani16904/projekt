import { defineConfig } from 'vite';

export default defineConfig({
  root: './www', // Set the root directory to the folder containing index.html
  build: {
    outDir: '../dist', // Output directory for the build
    emptyOutDir: true, // Clean the output directory before building
  },
});