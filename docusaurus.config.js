// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UtsavBalar',
  tagline: 'Fighting for humanity',
  url: 'https://utsavbalar.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'UtsavBalar1231',
  projectName: 'docusaurus',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          // routeBasePath: '/blog', // Serve the blog at the site's root
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'UtsavBalar',
        logo: {
          alt: 'UtsavBalar Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/immensity',
            label: 'IMMENSITY',
            position: 'left'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/overview',
            label: 'ProtonAOSP',
            position: 'left'
          },
          {
            href: 'https://github.com/utsavbalar1231/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Info',
            items: [
              {
                label: 'IMMENSITY',
                to: '/immensity',
              },
              {
                label: 'ProtonAOSP',
                to: '/overview',
              },
              {
                label: 'Community',
                to: '/community',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'E-Mail',
                href: 'mailto:utsavbalar1231@gmail.com',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/UtsavTheCunt',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/UtsavTheCunt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/UtsavBalar1231',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UtsavBalar, Inc. Built with Docusaurus.`,
      },

      prism: {
        theme: require('prism-react-renderer/themes/nightOwlLight'),
        darkTheme: require('prism-react-renderer/themes/oceanicNext'),
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
