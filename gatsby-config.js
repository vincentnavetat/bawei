module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Wei Ba, PhD`,
    author: `Wei Ba`,
    description: `Neuroscientist in sleep and anaesthesia`,
    siteUrl: `https://wei-ba.info/`,
    social: {
      twitter: `vivien_ba`,
    },
    menuLinks: [
      {
        name: 'About',
        link: '/',
      },
      {
        name: 'Research',
        link: '/research',
      },
      {
        name: 'CV',
        link: '/cv',
      },
      {
        name: 'Publications',
        link: '/publications',
      },
      {
        name: 'Gallery',
        link: '/gallery',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            subsets: [`latin`],
          },
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
  ],
}
