import { defineConfig } from "vitest/config";
import path from "path";

const dir = import.meta.dirname;

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(dir),
      "@components": path.resolve(dir, "src/shared/components"),
      "@features": path.resolve(dir, "src/features"),
    },
  },
});
