import type { DefaultTheme } from "vitepress/theme";
import sidebarGen from "../helpers/sidebar_gen";

export default {
  logo: "/img/logo.png",
  search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "Pesquisar...",
          buttonAriaLabel: "pesquise",
        },
        modal: {
          noResultsText: "Nenhum resultado para",
          resetButtonTitle: "Limpar pesquisa",
          displayDetails: "Mostrar de forma detalhada",
          footer: {
            selectText: "para selecionar",
            closeText: "para fechar",
            navigateText: "para navegar",
          },
        },
      },
    },
  },
  returnToTopLabel: "Voltar ao topo",
  darkModeSwitchLabel: "Tema do site",
  docFooter: {
    next: "Próxima página",
    prev: "Página anterior",
  },

  lastUpdated: {
    text: "Última atualização",
    formatOptions: {
      localeMatcher: "best fit",
    },
  },

  editLink: {
    pattern: "https://pr.new/TheGB0077/Tech-Educa/edit/main/tech-educa/:path",
    text: "Edite esta página no StackBlitz",
  },

  // https://vitepress.dev/reference/default-theme-config
  nav: [
    { text: "Como contribuir!", link: "contribua/como_contribuir" },
  ],

  sidebar: await sidebarGen(),
  outline: {
    label: "Nesta página",
    level: "deep",
  },
  socialLinks: [
    { icon: "github", link: "https://github.com/TheGB0077/Tech-Educa/" },
  ],
} satisfies DefaultTheme.Config;
