import React from "react"
import Helmet from "react-helmet"

const MetaLinks = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* added refresh meta suggested by Lighthouse */}
        <meta http-equiv="refresh" />
        {/* Performance tip: hint to the browser to start the handshake for the fonts site */}
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Playfair+Display:400,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </>
  )
}

export default MetaLinks
