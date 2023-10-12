import NotFound from "@theme/components/404.vue";
import Link from "@theme/components/Link.vue";
import Youtube from "@theme/components/Youtube.vue";
import DefaultTheme from "vitepress/theme";
import "./styles/index.scss";
import { h } from "vue";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "not-found": () => h(NotFound),
    });
  },
  enhanceApp({ app }: { app: any }) {
    app.component("Link", Link);
    app.component("Youtube", Youtube);
  },
};
