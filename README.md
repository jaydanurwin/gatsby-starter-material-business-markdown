[![Netlify Status](https://api.netlify.com/api/v1/badges/ad7e589d-7716-4190-981f-3258aaa42d8c/deploy-status)](https://app.netlify.com/sites/gatsby-starter-anoun-forestry-1/deploys)

<p align="center">
  <a href="https://anoun.company">
    <img alt="ANOUN" src="https://anoun.company/images/anoun-share-image.png" width="600" />
  </a>
</p>

# Gatsby Starter by ANOUN #1 - Forestry

### "That was easy" Buttons

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ANOUN/gatsby-starter-anoun-1-forestry/)

### CMS

### [Forestry.io](https://forestry.io/)

<a href="https://app.forestry.io/quick-start?repo=anoun/gatsby-starter-anoun-1-forestry&engine=gatsby">
    <img alt="Import this project into Forestry" src="https://assets.forestry.io/import-to-forestryK.svg" />
</a>

### Features

* MDC React Components
* MDC Theming
* Home Page
* About Page
* Contact Page
* Contact Form
* Blog
* SEO
* Prettier code formatting
* CSS Fluid Typography
* Forestry.io config

### Coming Soon

* Formspark contact form
* About Page Photo
* JSON LD Content
* RSS Feed
* PWA Support (theme and manifest)
* Instructions for Setup (Blog post and video)

## Simple Setup

#### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jaydanurwin/anoun-gatsby-website/)

#### CMS

### [Forestry.io](https://forestry.io/)

<a href="https://app.forestry.io/quick-start?repo=jaydanurwin/anoun-gatsby-website&engine=gatsby">
    <img alt="Import this project into Forestry" src="https://assets.forestry.io/import-to-forestryK.svg" />
</a>

## Manual Setup

`git clone https://github.com/jaydanurwin/anoun-gatsby-website.git`

### Install Node Modules & CLI's

```bash
# if you don't have gatsby-cli already
npm install -g gatsby-cli
# change directory
cd anoun-gatsby-starter1-markdown
# install modules
npm install
```

### Develop Locally

```bash
npm run dev

# or

gatsby develop
```

## Deploy Options 

### Firebase
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
