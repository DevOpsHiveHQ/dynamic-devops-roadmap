import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Dynamic DevOps Roadmap',
  tagline: 'A FREE master plan to kickstart your DevOps Engineer career in the Cloud Native era following the Agile way!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://roadmap.devopshive.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DevOpsHiveHQ', // Usually your GitHub org/user name.
  projectName: 'dynamic-devops-roadmap', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-TZPYKXVZTV',
      },
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        searchBarPosition: "right",
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig: {
    image: 'img/dynamic-devops-roadmap-pillars.png',
    navbar: {
      title: 'Dynamic DevOps Roadmap',
      logo: {
        alt: 'Dynamic DevOps Roadmap Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          docId: "faq/README",
          label: 'FAQ',
          position: "left",
          type: "doc",
        },
        {
          docId: "getting-started/README",
          label: 'Getting Started',
          position: "left",
          type: "doc",
        },
        {
          docId: "/category/content",
          label: 'Content',
          position: "left",
          type: "doc",
        },
        {
          docId: "/category/projects",
          label: 'Projects',
          position: "left",
          type: "doc",
        },
        {
          href: 'https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://t.me/DevOpsHive/985',
          label: 'Telegram',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Roadmap',
          items: [
            {
              label: 'FAQ',
              to: '/faq',
            },
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Content',
              to: '/category/content',
            },
            {
              label: 'Projects',
              to: '/category/projects',
            },
          ],
        },
        {
          title: 'DevOps Hive',
          items: [
            {
              label: 'Website',
              href: 'https://devopshive.net',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DevOpsHiveHQ',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/devopshive',
            },
          ],
        },
      ],
      copyright: `By <a href="https://devopshive.net/">DevOps Hive</a> and under the open-source license <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
