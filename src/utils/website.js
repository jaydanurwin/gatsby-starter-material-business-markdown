module.exports = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'ANOUN | A Web Design Company in Boise, ID', // Navigation and Site Title
    titleAlt: 'ANOUN', // Title for JSONLD
    description:
        'ANOUN is a design and development company based in Boise, Idaho. We design clean, efficient, modern customer experiences for websites and mobile apps. We aim to deliver the best design services in Boise, Meridian, and Nampa, Idaho. Contact us to learn more!',
    headline: 'Writing and publishing content for LekoArts', // Headline for schema.org JSONLD
    url: 'https://anoun.design', // Domain of your site. No trailing slash!
    siteLanguage: 'en', // Language Tag on <html> element
    ogImage: '/static/images/anoun-share-image.png', // Used for SEO
    ogLanguage: 'en_US', // Facebook Language

    // JSONLD / Manifest
    favicon: 'src/favicon.png', // Used for manifest favicon generation
    shortName: 'ANOUN', // shortname for manifest. MUST be shorter than 12 characters
    author: 'ANOUN', // Author for schemaORGJSONLD
    themeColor: '#000000',
    backgroundColor: '#ffffff',

    facebook: 'gatsby-prismic', // Facebook Site Name
}
