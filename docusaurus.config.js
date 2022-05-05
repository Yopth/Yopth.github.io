// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "YOPTH",
  tagline: "O ever youthful, O ever weeping.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Yopth", // Usually your GitHub org/user name.
  projectName: "Yopth.github.io", // Usually your repo name.
  deploymentBranch: "deployer",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "YOPTH",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs-engh/intro",
            label: "ENGH",
            position: "left",
            activeBaseRegex: "/docs-engh",
          },
          {
            to: "/docs-tech/intro",
            label: "TECH",
            position: "left",
            activeBaseRegex: "/docs-tech",
          },
          {
            href: "https://github.com/Yopth/Yopth.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "ENGH",
                to: "/docs-engh/intro",
              },
              {
                label: "TECH",
                to: "/docs-tech/intro",
              },
            ],
          },
          {
            title: "Contact Me",
            items: [
              {
                label: "WeChat",
                href: "/wechat",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Kail_Penggeor",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Yopth/Yopth.github.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pandy.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-tech",
        path: "docs-tech",
        routeBasePath: "docs-tech",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-engh",
        path: "docs-engh",
        routeBasePath: "docs-engh",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
};

module.exports = config;
