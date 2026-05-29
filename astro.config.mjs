import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://SSSSSSuger.github.io",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
