import React from "react";
import Helmet from "react-helmet";
import config from "../../../config/website.js";

const MetaData = () => {
  const title = config.title;
  const description = config.description;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </>
  );
};

export default MetaData;
