[![pipeline status](https://gitlab.com/anoun/anoun-gatsby/badges/master/pipeline.svg)](https://gitlab.com/anoun/anoun-gatsby/pipelines)

<p align="center">
  <a href="https://anoun-gatsby-website.firebaseapp.com">
    <img alt="ANOUN" src="https://anoun.design/images/anoun-share-image.png" width="600" />
  </a>
</p>

# ANOUN'S Gatsby Website

## Featureset

- Gitlab CI/CD
- Firebase Hosting
- Dynamic SEO (titles change)
- Layout component
- Prettier config (VS Code Plugin support)
- Sanity.io Headless CMS integration
- CSS Fluid Typography
- About Page
- Blog

## Upcoming Features

- MDC Web Vanilla Components (MDC React is coming)
- MDC Theming
- Homepage Design w/ work cards
- Header Component
- About Page Photo
- RSS Feed
- JSON LD Content
- PWA Support (theme and manifest)
- Detailed Instructions for Setup (Blog post and video)

## Setup

### Clone

`git clone https://gitlab.com/anoun/anoun-website.git`

### Install Node Modules & CLI's

```bash
# if you don't have sanity cli already
npm install -g sanity
# if you don't have firebase-tools already
npm install -g firebase-tools
# install modules
npm install
```

### Develop Locally

`npm run start`

### Pre-Deploy Steps

#### Prismic

## Deploy Options

### 1. Gitlab & Firebase (our choice)

### 2. Netlify

## Known Issues

- Any MDC React Component using the ripple component is not currently compatible with Gatsby. Waiting on this milestone in the MDC Web Repo (https://github.com/material-components/material-components-web/milestone/18)
  - MDC React Button can't be used
- CSS Modules or Sass Modules (.module.scss) files were giving me a lot of troubles with MDC due to their BEM name styling so if anyone has found a work around for CSS in JS with hyphens in class names I'm open to suggestions!
  - Going to try [this](https://codelabs.developers.google.com/codelabs/mdc-112-web/#0) tutorial to see if I can fix it
