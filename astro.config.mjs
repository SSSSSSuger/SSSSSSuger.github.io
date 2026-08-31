import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ssssssuger.github.io",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
