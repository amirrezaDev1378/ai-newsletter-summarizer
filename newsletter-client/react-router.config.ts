import { copyFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Config } from "@react-router/dev/config";

const base = process.env.VITE_BASE_PATH || "/";

export default {
  ssr: false,
  // Keep this aligned with Vite `base`, including the trailing slash.
  // A mismatch (e.g. `/repo` vs `/repo/`) makes SPA prerender exit 1 with no error.
  basename: base,
  routeDiscovery: { mode: "initial" },
  async buildEnd({ reactRouterConfig }) {
    const clientDir = join(reactRouterConfig.buildDirectory, "client");
    await copyFile(join(clientDir, "index.html"), join(clientDir, "404.html"));
    await writeFile(join(clientDir, ".nojekyll"), "");
  },
} satisfies Config;
