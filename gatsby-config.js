require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        title: `ANOUN | A Web Design Company in Boise, ID`,
        author: `ANOUN`,
        description: `ANOUN is a design and development company based in Boise, Idaho. We design clean, efficient, modern customer experiences for websites and mobile apps. We aim to deliver the best design services in Boise, Meridian, and Nampa, Idaho. Contact us to learn more!`,
        siteUrl: `https://anoun-staging.firebaseapp.com/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
        {
            resolve: `gatsby-plugin-freshchat`,
            options: {
                token: "1aafc7b5-e5d7-4f09-aff0-764eadd059a0",
                host: "https://wchat.freshchat.com",
            },
        },
        `gatsby-plugin-sitemap`
    ]
}
