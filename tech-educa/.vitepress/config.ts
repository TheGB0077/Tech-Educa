import { withPwa } from "@vite-pwa/vitepress";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  locales: {
    root: {
      label: "Português",
      lang: "pt_BR",
    },
  },

  outDir: "./../dist/",

  lang: "pt-BR",
  title: "Tech Educa",
  head: [["link", {rel: 'icon', href: '/img/favicon.ico'}]],
  description: "Um portal para seu aprendizado!",

  themeConfig: {
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

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Como contribuir!", link: "contribua/como_contribuir" },
    ],

    sidebar: {
      "/fundamentos/programacao/logica": {
        base: "/fundamentos/programacao/logica",
        items: [
          {
            text: "Lógica de Programação",
            collapsed: false,
            items: [
              { text: "Portugol", link: "/" },
              { text: "Variáveis", link: "/variaveis" },
              { text: "Controle de Fluxo", link: "/controle-de-fluxo" },
              { text: "Laços de Repetição", link: "/repeticao" },
            ],
          },
        ],
      },
    },
    outline: {
      label: "Nesta página",
      level: "deep",
    },
        socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
  },

  // Gera arquivos no formato `/path/to/page.html` em URLs dessa forma `/path/to/page`
  cleanUrls: true,

  // Preventa builds quando o conteúdo tem links quebrados
  ignoreDeadLinks: false,

  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/NotFound\.vue$/,
          replacement: fileURLToPath(new URL("./theme/components/404.vue", import.meta.url)),
        },
      ],
    },
  },

  pwa: {
    outDir: "./../dist/",
    registerType: "autoUpdate",
  }
}));
