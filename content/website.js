module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: `ANOUN | A Web Design Company in Boise, ID`, // Navigation and Site Title
  titleTemplate: "%s · ANOUN",
  // titleAlt: "Gatsby Prismic.io", // Title for JSONLD
  description: `ANOUN is a design and development company based in Boise, Idaho. We design clean, efficient, modern customer experiences for websites and mobile apps. We aim to deliver the best design services in Boise, Meridian, and Nampa, Idaho. Contact us to learn more!`,
  // headline: "Writing and publishing content for LekoArts", // Headline for schema.org JSONLD
  siteUrl: `https://anoun.company`, // Domain of your site. No trailing slash!
  // siteLanguage: "en", // Language Tag on <html> element
  image: "/images/anoun-share-image.png", // Used for SEO
  // ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  icon: `src/favicon.png`, // Used for manifest favicon generation
  short_name: `ANOUN`, // shortname for manifest. MUST be shorter than 12 characters
  owner: "ANOUN", // Author for schemaORGJSONLD
  theme_color: `#000000`,
  background_color: `#ffffff`,

  twitterUsername: "@anouncompany", // Twitter Username
  // facebook: "gatsby-prismic", // Facebook Site Name
  googleAnalyticsID: "UA-122654359-2",

  // skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
  // facebookAppID: "",
}
