const path = require(`path`);

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `anoun`,
                accessToken: `${process.env.API_KEY}`,
                linkResolver: ({ node, key, value }) => post => `/${post.uid}`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`
            }
        },
    ]
};