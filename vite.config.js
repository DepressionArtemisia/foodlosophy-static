import { realpathSync } from "node:fs";
import { defineConfig } from "vite";

export default defineConfig({
  root: realpathSync(process.cwd()),
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
