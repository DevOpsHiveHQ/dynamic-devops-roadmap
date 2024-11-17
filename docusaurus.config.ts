import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Dynamic DevOps Roadmap',
  tagline: 'A FREE pragmatic plan to kickstart your DevOps Engineer career in the Cloud Native era following the Agile MVP style!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://devopsroadmap.io',
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
          editUrl: 'https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap/tree/main',
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
        indexBlog: false,
        indexDocs: true,
        docsRouteBasePath: "/",
        searchBarPosition: "right",
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'announcement',
      content: '<b>Announcement:</b> <a target="_blank" href="https://newsletter.devopsroadmap.io/subscribe">Subscribe now</a> to the community activities, which include mentorship, job posting, online meetings, workshops, career tips and tricks, and more.',
      backgroundColor: '#303846',
      textColor: '#ffffff',
      isCloseable: false,
    },
    image: 'img/dynamic-devops-roadmap-flow.png',
    docs: {
      sidebar: {
        autoCollapseCategories: false,
      },
    },
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
          docId: "foundations/README",
          label: 'Foundations',
          position: "left",
          type: "doc",
        },
        {
          docId: "projects/README",
          label: 'Projects',
          position: "left",
          type: "doc",
        },
        {
          docId: "interview/README",
          label: 'Interview',
          position: "left",
          type: "doc",
        },
        {
          docId: "growth/README",
          label: 'Growth',
          position: "left",
          type: "doc",
        },
        {
          label: '⭐ Star on GitHub (1.4k+)',
          href: 'https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap',
          position: 'right',
        },
        {
          label: '✉️ Newsletter',
          href: 'https://newsletter.devopsroadmap.io/subscribe',
          position: 'right',
        },
        {
          label: 'Telegram',
          href: 'https://t.me/DevOpsHive/985',
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
              label: 'Foundations',
              to: '/foundations',
            },
          ],
        },
        {
          title: 'Next Steps',
          items: [
            {
              label: 'Hands-on Projects',
              to: '/projects',
            },
            {
              label: 'Interview Preparation',
              to: '/interview',
            },
            {
              label: 'Career Growth',
              to: '/growth',
            },
          ],
        },
        {
          title: 'Project Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap',
            },
            {
              label: 'Newsletter',
              href: 'https://newsletter.devopsroadmap.io/subscribe',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/DevOpsHive/985',
            },
          ],
        },
      ],
      copyright: `Dynamic DevOps Roadmap by <a target="_blank" href="https://devopshive.net/">DevOps Hive</a> and under the open-source license <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> © ${new Date().getFullYear()}`,
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
