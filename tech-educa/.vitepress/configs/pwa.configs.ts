import type { PwaOptions } from "@vite-pwa/vitepress";

export default {
  base: "/",
  scope: "/",
  outDir: "./../dist/",
  registerType: "autoUpdate",
  includeManifestIcons: true,
  experimental: {
    includeAllowlist: true,
  },
  manifest: {
    start_url: "/",
    name: "Tech Educa",
    short_name: "Tech Educa",
    description: "Um portal para seu aprendizado!",
    theme_color: "#46cb8a",
    icons: [
      {
        src: "/img/PWA/maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/img/PWA/maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/img/PWA/maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/img/PWA/maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
  workbox: {
    globPatterns: [
      "**/*.{js,css,html,ico,png,svg,webp}",
    ],
  },
} satisfies PwaOptions;
