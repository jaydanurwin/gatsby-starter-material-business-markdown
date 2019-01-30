import React from "react";
import Helmet from "react-helmet";
import config from "../../utils/website.js";

const MetaData = () => {
  const title = config.title;
  const description = config.description;
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Playfair+Display:400,900"
          rel="stylesheet"
        /> */}
      </Helmet>
    </>
  );
};

export default MetaData;
