require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `ANOUN | A Web Design Company in Boise, ID`,
    titleTemplate: '%s · ANOUN',
    description: `ANOUN is a design and development company based in Boise, Idaho. We design clean, efficient, modern customer experiences for websites and mobile apps. We aim to deliver the best design services in Boise, Meridian, and Nampa, Idaho. Contact us to learn more!`,
    url: 'https://anoun.company', // no trailing slash!
    image: '/images/anoun-share-image.png',
    owner: 'ANOUN',
    twitterUsername: '@anouncompany',
    facebookAppID: '',
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
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: ["node_modules"],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-122654359-2`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ANOUN | A Web Design Company in Boise, ID`,
        short_name: `ANOUN`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/favicon.png`
      },
    },
    `gatsby-plugin-offline`,
  ],
}
