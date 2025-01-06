import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Dynamic DevOps Roadmap',
  tagline: 'Experience-Driven DevOps: Beyond Tools, Where Concepts Meet Real-World Challenges',
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

  customFields: {
    description: 'A FREE pragmatic DevOps roadmap to kickstart your DevOps career in the Cloud Native era following the Agile MVP style! A DevOps Engineer or Software Engineer, this roadmap is all that you need to start, grow, and expand!',
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

  headTags: [
    // Declare Apple touch icon.
    {
      tagName: 'link',
      attributes: {
        rel: "apple-touch-icon",
        type: "image/png",
        sizes: "300x300",
        href: "/img/apple-touch-icon.png",
      },
    },
    // Declare JSON-LD structured data.
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOccupationalProgram',
        educationalProgramMode: 'blended',
        name: 'Dynamic DevOps Roadmap',
        url: 'https://devopsroadmap.io',
        logo: 'https://devopsroadmap.io/img/logo.svg',
      }),
    },
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'devops roadmap, devops, roadmap, career, career shift, sre, cloud, platform, software' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'A FREE Pragmatic Roadmap | Dynamic DevOps Roadmap' },
      { name: 'twitter:description', content: 'A FREE pragmatic DevOps roadmap to kickstart your DevOps career in the Cloud Native era following the Agile MVP style! (also mentorship and bootcamp)' },
    ],
    announcementBar: {
      id: 'announcement',
      content: '<a target="_blank" href="https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap">⭐ Star on GitHub ⭐</a> and <a target="_blank" href="https://newsletter.devopsroadmap.io/subscribe">✉️ Join the Community ✉️</a>',
      backgroundColor: '#4d8b15',
      textColor: '#ffffff',
      isCloseable: false,
    },
    image: 'img/dynamic-devops-roadmap-modules.png',
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
          docId: "getting-started/README",
          label: 'Getting Started',
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
          label: 'More',
          position: "left",
          items: [
            {
              docId: "general/faq/README",
              label: 'FAQ',
              type: "doc",
            },
            {
              docId: "general/learning-plan/README",
              label: 'Learning Plan',
              type: "doc",
            },
            {
              docId: "growth/README",
              label: 'Growth',
              type: "doc",
            },
          ]
        },
        {
          label: '⭐ Star on GitHub (1.7k+)',
          href: 'https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap',
          position: 'right',
        },
        {
          label: '✉️ Community',
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
              label: 'Community',
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
