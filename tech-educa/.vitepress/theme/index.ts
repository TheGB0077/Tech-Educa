// Vue / Vitepress
import DefaultTheme from "vitepress/theme";
import type {Theme} from "vitepress";
import "./styles/index.scss";
import { h } from "vue";

//Componentes
import ManterPWA from "@theme/components/PWA/ManterPWA.vue";
import NotFound from "@theme/components/404.vue";
import Link from "@theme/components/Link.vue";
import Youtube from "@theme/components/Youtube.vue";
import FonteImg from "@theme/components/FonteImg.vue";

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
