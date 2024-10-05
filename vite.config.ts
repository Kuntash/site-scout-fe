import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
