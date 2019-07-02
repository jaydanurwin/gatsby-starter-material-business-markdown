import React from "react"
import Helmet from "react-helmet"

const MetaLinks = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* added refresh meta suggested by Lighthouse */}
        <meta http-equiv="refresh" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link href="https://fonts.googleapis.com/css?family=Lora|Playfair+Display:900&display=swap" rel="stylesheet"/>
      </Helmet>
    </>
  )
}

export default MetaLinks
