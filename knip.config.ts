import type { KnipConfig } from "knip";

const config: KnipConfig = {
  // @typescript-eslint/parser: needed for knip to work properly
  // sharp: needed for astro:assets to work properly with pnpm
  ignoreDependencies: ["@typescript-eslint/parser", "sharp"],
};

export default config;
