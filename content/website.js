module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: `ANOUN | A Web Design Company in Boise, ID`, // Navigation and Site Title
  titleTemplate: "%s · ANOUN",
  description: `ANOUN is a design and development company based in Boise, Idaho. We design clean, efficient, modern customer experiences for websites and mobile apps. We aim to deliver the best design services in Boise, Meridian, and Nampa, Idaho. Contact us to learn more!`,
  siteUrl: `https://anoun.company`, // Domain of your site. No trailing slash!
  image: "/images/anoun-share-image.png", // Used for SEO

  // Manifest
  icon: `src/favicon.png`, // Used for manifest favicon generation
  short_name: `ANOUN`, // shortname for manifest. MUST be shorter than 12 characters
  owner: "ANOUN", // Author for schemaORGJSONLD
  theme_color: `#000000`,
  background_color: `#ffffff`,

  // Social and Analytics
  twitterUsername: "@anouncompany", // Twitter Username
  googleAnalyticsID: "UA-122654359-2",
}
