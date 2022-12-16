import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// https://astro.build/config

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // Example: Provide a custom path to a Tailwind config file
      config: {
        path: "./tailwind.config.cjs",
        applyBaseStyles: false,
      },
    }),
    mdx(),
    image({
      cacheDir: "./.cache/image",
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  base: "/new",
});
