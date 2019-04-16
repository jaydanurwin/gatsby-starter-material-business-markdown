[![pipeline status](https://gitlab.com/anoun/anoun-gatsby/badges/master/pipeline.svg)](https://gitlab.com/anoun/anoun-gatsby/pipelines)

<p align="center">
  <a href="https://anoun-gatsby-website.firebaseapp.com">
    <img alt="ANOUN" src="https://anoun.design/images/anoun-share-image.png" width="600" />
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

`git clone https://gitlab.com/anoun/anoun-website.git`

### Install Node Modules & CLI's

```bash
# if you don't have gatsby-cli already
npm install -g gatsby-cli
# install modules
npm install
```

### Develop Locally

`npm run start`

## Deploy Options

### 1. Gitlab & Firebase (our choice)

```bash
# if you don't have firebase-tools already
npm install -g firebase-tools
```

### 2. Netlify

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/anoun/anoun-gatsby)

## Known Issues

- Any MDC React Component using the ripple component is not currently compatible with Gatsby. Waiting on this milestone in the MDC Web Repo (https://github.com/material-components/material-components-web/milestone/18)
  - MDC React Button can't be used
- CSS Modules or Sass Modules (.module.scss) files were giving me a lot of troubles with MDC due to their BEM name styling so if anyone has found a work around for CSS in JS with hyphens in class names I'm open to suggestions!
  - Going to try [this](https://codelabs.developers.google.com/codelabs/mdc-112-web/#0) tutorial to see if I can fix it
