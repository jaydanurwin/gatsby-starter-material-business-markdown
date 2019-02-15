require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

const website = require('./src/utils/website')
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
    /* General Information */
    pathPrefix: website.pathPrefix,
    siteMetadata: {
        siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
        pathPrefix,
        title: website.title,
        titleAlt: website.titleAlt,
        description: website.description,
        banner: website.logo,
        headline: website.headline,
        siteLanguage: website.siteLanguage,
        ogLanguage: website.ogLanguage,
        author: website.author,
        facebook: website.facebook
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `anoun`,
                accessToken: `${process.env.API_KEY}`,
            }
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                includePaths: ['node_modules']
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-122654359-2`,
            },
        },
        `gatsby-plugin-sitemap`
    ]
}
