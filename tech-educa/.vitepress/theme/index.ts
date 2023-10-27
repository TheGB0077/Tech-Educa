// Vue / Vitepress
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./styles/index.scss";
import { h } from "vue";

// Componentes
import NotFound from "@theme/components/404.vue";
import FonteImg from "@theme/components/FonteImg.vue";
import Link from "@theme/components/Link.vue";
import ManterPWA from "@theme/components/PWA/ManterPWA.vue";
import Youtube from "@theme/components/Youtube.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "not-found": () => h(NotFound),
      "layout-bottom": () => h(ManterPWA),
    });
  },
  enhanceApp({ app }) {
    app.component("Link", Link);
    app.component("Youtube", Youtube);
    app.component("FonteImg", FonteImg);
  },
} satisfies Theme;
