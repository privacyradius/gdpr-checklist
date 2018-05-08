module.exports = {
  siteMetadata: {
    title: 'The GDPR Checklist',
    siteUrl: 'https://gdprchecklist.io'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gdprchecklist.io',
        sitemap: 'https://gdprchecklist.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-113160447-1'
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: false
        }
      }
    },
  ],
};
