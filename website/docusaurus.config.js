module.exports = {
  title: 'TestSkelo',
  tagline: 'The tagline of my site',
  url: 'https://ioncakephper.github.io',
  baseUrl: '/testd2/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ioncakephper', // Usually your GitHub org/user name.
  projectName: 'testd2', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Test Skelo',
      logo: {
        alt: 'TEst Skelo Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/getting-started',
          // activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/tutorials/overview',
          // activeBasePath: 'docs',
          label: 'Tutorials',
          position: 'left',
        },
        { href: 'https://community.fintechos.com/Academy', label: 'Academy', position: 'right' },
        { href: 'https://community.fintechos.com', label: 'Community', position: 'right' },
        { href: 'https://fintechos.atlassian.net/servicedesk/customer/user/login?destination=portals', label: 'Support', position: 'right' },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
