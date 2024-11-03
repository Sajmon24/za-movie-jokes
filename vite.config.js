import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  optimizeDeps: {
    include: [
      "@chakra-ui/react",
      "@chakra-ui/icons",
      "@emotion/react",
      "@emotion/styled",
    ],
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
