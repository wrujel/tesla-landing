/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["json-summary", "text", "lcov"],
      include: ["src/**/*.{astro,ts}"],
      exclude: ["src/env.d.ts"],
    },
  },
});
