import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true, // Enables handling for `node:` protocol imports
    }),
  ],
  resolve: {
    alias: {
      buffer: "buffer", // Explicit alias for buffer
    },
  },
  optimizeDeps: {
    include: ["buffer"], // Only include buffer if that's the required dependency
  },
  server: {
    proxy: {
      // Configure proxy if needed for API requests
    },
  },
  build: {
    rollupOptions: {
      external: [], // Leave this empty to ensure all modules are bundled for the browser
    },
  },
});
