import { copyFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Config } from "@react-router/dev/config";
import { generateSW } from "workbox-build";

const basename = (process.env.VITE_BASE_PATH || "/").replace(/\/+$/, "") || "/";

export default {
  ssr: false,
  basename,
  routeDiscovery: { mode: "initial" },
  async buildEnd({ reactRouterConfig }) {
    const clientDir = join(reactRouterConfig.buildDirectory, "client");
    await copyFile(join(clientDir, "index.html"), join(clientDir, "404.html"));
    await writeFile(join(clientDir, ".nojekyll"), "");

    await generateSW({
      globDirectory: clientDir,
      globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2,webmanifest}"],
      globIgnores: ["**/sw.js", "**/workbox-*.js"],
      swDest: join(clientDir, "sw.js"),
      navigateFallback: "index.html",
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/raw\.githubusercontent\.com\/.*/i,
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "newsletter-content",
            expiration: {
              maxEntries: 80,
              maxAgeSeconds: 60 * 60 * 24 * 7,
            },
          },
        },
      ],
    });
  },
} satisfies Config;
