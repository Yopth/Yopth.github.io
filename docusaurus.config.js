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
            type: "doc",
            docId: "intro",
            position: "left",
            label: "ENGH",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "test",
          },
          {
            to: "/blog",
            label: "TECH",
            position: "left",
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
              // {
              //   label: "Tutorial",
              //   to: "/docs/intro",
              // },
              {
                label: "ENGH",
                to: "/docs/intro",
              },
              {
                label: "TECH",
                to: "/blog",
              },
            ],
          },
          {
            title: "Contact Me",
            items: [
              {
                label: "WeChat",
                // href: 'https://github.com/Yopth/Yopth.github.io',
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
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
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
        id: "test",
        path: "test",
        routeBasePath: "test",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
};

module.exports = config;
