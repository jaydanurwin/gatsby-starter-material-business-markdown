[![pipeline status](https://gitlab.com/anoun/anoun-gatsby/badges/master/pipeline.svg)](https://gitlab.com/anoun/anoun-gatsby/pipelines)

<p align="center">
  <a href="https://anoun-gatsby-website.firebaseapp.com">
    <img alt="ANOUN" src="https://anoun.design/images/anoun-share-image.png" width="600" />
  </a>
</p>

# ANOUN'S Gatsby Website

### Clone

`git clone https://gitlab.com/anoun/anoun-gatsby.git`

### Install Node Modules

`npm install`

### Develop

`npm run start`

### Featureset

- MDC Web Vanilla Components (MDC React is coming)
- MDC Theming
- Gitlab CI/CD
- Firebase Hosting
- Basic SEO (Robots.txt, Sitemap, title, description)
- Footer component
- Layout component
- Prettier config (VS Code Plugin support)
- Prismic.io Headless CMS integration
- CSS Fluid Typography
- Homepage Design w/ work cards

### Coming Soon

- Header Component
- Blog Page w/ card grid
- About Page Photo
- Dynamic SEO (title & description)
- JSON LD Content
- RSS Feed
- PWA Support (theme and manifest)
- Instructions for Setup (Blog post and video)

### Build Locally

`npm run build`

### Known Issues

- Any MDC React Component using the ripple component is not currently compatible with Gatsby. Waiting on this milestone in the MDC Web Repo (https://github.com/material-components/material-components-web/milestone/18)
  - MDC React Button can't be used
