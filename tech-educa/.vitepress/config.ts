// Config Imports
import { withPwa } from "@vite-pwa/vitepress";
import { defineConfig } from "vitepress";
import pwaConfigs from "./configs/pwa.configs";
import themeConfigs from "./configs/theme.configs";

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  locales: {
    root: {
      label: "Português",
      lang: "pt-BR",
    },
  },

  outDir: "./../dist/",

  lang: "pt-BR",
  title: "Tech Educa",
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#46cb8a" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "#46cb8a" }],
    ["meta", { name: "msapplication-TileImage", content: "/img/PWA/maskable_icon_x192.png" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
  ],
  description: "Um portal para seu aprendizado!",

  themeConfig: themeConfigs,

  // Gera arquivos no formato `/path/to/page.html` em URLs dessa forma `/path/to/page`
  cleanUrls: true,

  // Preventa builds quando o conteúdo tem links quebrados
  ignoreDeadLinks: false,

  pwa: pwaConfigs,
}));

