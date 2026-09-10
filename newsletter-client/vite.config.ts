import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [
    tailwindcss(),
    reactRouter(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,
      outDir: "build/client",
      includeAssets: ["favicon.ico", "icons/*.png", "icons/*.svg", ".nojekyll"],
      manifest: {
        name: "Newsletter Summaries",
        short_name: "Summaries",
        description: "Read AI-summarized newsletters as a clean, installable app.",
        theme_color: "#18181b",
        background_color: "#18181b",
        display: "standalone",
        orientation: "portrait",
        categories: ["news", "magazines"],
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/icon-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2,webmanifest}"],
        navigateFallback: "index.html",
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
