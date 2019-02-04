[![pipeline status](https://gitlab.com/jaydan.urwin/anoun-gatsby/badges/master/pipeline.svg)](https://gitlab.com/jaydan.urwin/anoun-gatsby/pipelines)

<p align="center">
  <a href="https://anoun.design">
    <img alt="ANOUN" src="https://anoun.design/seo/anoun-share-image.png" width="300" />
  </a>
</p>

# ANOUN'S Gatsby Website


## TODO's

- [X] add favicon
- [X] [use React Helmet for Google Fonts](https://www.gatsbyjs.org/tutorial/part-eight/#add-page-metadata)
- [X] New CI build process/image
- [ ] get home page moved over (no CMS)
  - [X] add CSS Fluid for typography
  - [X] add Typography styles
- [x] get MDC React working
- [x] style out about page
- [x] add reset styles
- [ ] add SEO features from ghost-starter and prismic-starter
- [ ] add manifest file
- [ ] add font styles with swap
    ```html
    <!-- Add any global styles for body, document, etc. -->
        <style>
          @font-face {
            font-family: 'Pacifico';
            font-style: normal;
            font-weight: 400;
            src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v12/Q_Z9mv4hySLTMoMjnk_rCXYhjbSpvc47ee6xR_80Hnw.woff2) format('woff2');
            /* The browser draws the text immediately in the fallback font if the font
              isn't loaded, then swaps it with the webfont when it eventually loads
              See: https://developers.google.com/web/updates/2016/02/font-display
            */
            font-display: swap;
          }
          body {
            margin: 0;
            /* This is a font-stack that tries to use the system-default sans-serifs first */
            font-family: Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            line-height: 1.5;
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
          }
        </style>

    ```

### Clone

`git clone`

### Install Node Modules

`npm install`

### Develop

`npm run start`

### Deploy

`npm run gitlab:deploy`

### Build Locally

`npm run build`

### Known Issues

- Any MDC React Component using the ripple component is not currently compatible with Gatsby
