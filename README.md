[![Netlify Status](https://api.netlify.com/api/v1/badges/d55477c6-fd83-4569-9e61-340789e44e28/deploy-status)](https://app.netlify.com/sites/leanaurwin/deploys)

<a href="https://app.forestry.io/quick-start?repo=jaydanurwin/leana-gatsby-website&engine=gatsby">
    <img alt="Import this project into Forestry" src="https://assets.forestry.io/import-to-forestryK.svg" />
</a>

<p align="center">
  <a href="https://anoun-gatsby-website.firebaseapp.com">
    <img alt="ANOUN" src="https://anoun.company/images/anoun-share-image.png" width="600" />
  </a>
</p>

# ANOUN'S Gatsby Website

### Featureset

* MDC React Components
* MDC Theming
* Gitlab CI/CD
* Firebase Hosting
* Full dynamic SEO
* Footer component
* Layout component
* Prettier config
* CSS Fluid Typography
* Homepage Design w/ work cards
* Markdown based Blog
* Header Component

### Coming Soon

* About Page Photo
* JSON LD Content
* RSS Feed
* PWA Support (theme and manifest)
* Instructions for Setup (Blog post and video)

## Setup

### Clone

`git clone https://github.com/jaydanurwin/anoun-gatsby-website.git`

### Install Node Modules & CLI's

```bash
# if you don't have gatsby-cli already
npm install -g gatsby-cli
# install modules
npm install
```

### Develop Locally

```bash
npm run start

# or

gatsby develop
```

## Deploy

```bash
# if you don't have firebase-tools already
npm install -g firebase-tools

# authenticate firebase
firebase login

# build gatsby site
npm run build

# deploy to firebase hosting
firebase deploy:hosting
```

## Known Issues

- CSS Modules or Sass Modules (.module.scss) files were giving me a lot of troubles with MDC due to their BEM name styling so if anyone has found a work around for CSS in JS with hyphens in class names I'm open to suggestions!
  - Going to try [this](https://codelabs.developers.google.com/codelabs/mdc-112-web/#0) tutorial to see if I can fix it
