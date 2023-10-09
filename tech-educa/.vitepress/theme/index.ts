import Link from "@theme/components/Link.vue";
import Youtube from "@theme/components/Youtube.vue";
import DefaultTheme from "vitepress/theme";
import CustomLayout from "./components/CustomLayout.vue";
import "./styles/index.scss";

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }: { app: any }) {
    app.component("Link", Link);
    app.component("Youtube", Youtube);
  },
};
