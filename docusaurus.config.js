// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Инструкция для платформы 2x2forum.ru",
  tagline: "2x2forum.ru",
  favicon: "img/2x2forum.ico",

  // Set the production url of your site here
  url: "https://2x2forum.ru/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "2x2forum", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Ekaterino4ka90/2x2forum_doc",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/2x2forum.png",
      navbar: {
        title: "",
        logo: {
          href: "https://2x2forum.ru",
          alt: "2x2forum.ru",
          src: "img/2x2forum.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Документация",
          },
          {
            to: "https://2x2forum.ru/blog/",
            label: "Блог",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `© ${new Date().getFullYear()} Copyright: 2x2forum.ru - Все права защищены.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
